import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpostpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './createpostpage.html',
  styleUrls: ['./createpostpage.scss'],
})
export class Createpostpage implements OnInit {

  title = '';
  category = '';
  author = '';
  image = '';
  summary = '';
  readTime = 0;
  tags = '';

  isEditMode = false;
  editId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.editId = Number(id);

      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      const post = posts.find((p: any) => p.id === this.editId);

      if (post) {
        this.title = post.title;
        this.category = post.category;
        this.author = post.author;
        this.image = post.image;
        this.summary = post.summary;
        this.readTime = post.readTime;
        this.tags = (post.details?.tags || []).join(', ');
      }
    }
  }

  addPost() {
    if (
      !this.title.trim() ||
      !this.category.trim() ||
      !this.author.trim() ||
      !this.summary.trim() ||
      !this.readTime ||
      !this.image
    ) {
      alert('Please fill all fields and upload an image');
      return;
    }

    const tagsArray = this.tags
      ? [...new Set(this.tags.split(',').map(tag => tag.trim()))]
      : [];

    let posts = JSON.parse(localStorage.getItem('posts') || '[]');

    if (this.isEditMode) {
      posts = posts.map((p: any) => {
        if (p.id === this.editId) {
          return {
            ...p,
            title: this.title,
            category: this.category,
            author: this.author,
            summary: this.summary,
            image: this.image,
            readTime: this.readTime,
            date: "Updated",
            details: {
              ...p.details,
              featuredImage: this.image,
              tags: tagsArray.length ? tagsArray : p.details.tags,
              postInfo: {
                ...p.details.postInfo,
                updated: "Now"
              }
            }
          };
        }
        return p;
      });
    } else {
      const newPost = {
        id: Date.now(),
        title: this.title,
        category: this.category,
        author: this.author,
        authorId: 'user1',
        avatar: `https://i.pravatar.cc/40?u=${this.author}`,
        date: "Now",
        readTime: this.readTime,
        summary: this.summary,
        image: this.image,
        likes: 0,
        comments: 1,
        details: {
          breadcrumb: ["Home", this.category, this.title],
          author: {
            name: this.author,
            bio: "New Author",
            avatar: `https://i.pravatar.cc/40?u=${this.author}`
          },
          postInfo: {
            published: "Now",
            updated: "Now",
            readTime: this.readTime.toString()
          },
          featuredImage: this.image,
          article: [
            {
              heading: this.title,
              paragraph: this.summary
            }
          ],
          tags: tagsArray.length ? tagsArray : [this.category],
          comments: []
        }
      };

      posts.unshift(newPost);
    }

    localStorage.setItem('posts', JSON.stringify(posts));
    this.router.navigate(['/my-posts']);
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image');
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        this.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}