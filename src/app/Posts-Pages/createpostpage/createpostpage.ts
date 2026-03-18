import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { POSTS } from '../../Data/posts.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpostpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createpostpage.html',
  styleUrls: ['./createpostpage.scss'],
})
export class Createpostpage {

  title = '';
  category = '';
  author = '';
  image = '';
  summary = '';
  readTime = 0;

  constructor(private router: Router) {}

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

  const newPost = {
    id: POSTS.length + 1,
    title: this.title,
    category: this.category,
    author: this.author,
    avatar: "https://i.pravatar.cc/40",
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
        avatar: "https://i.pravatar.cc/40"
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
        },
        {
          heading: "More Details",
          paragraph: "This is additional generated content for the post."
        }
      ],

      tags: [this.category, "New"], 

      comments: [
        {
          user: "Admin",
          time: "Just now",
          avatar: "https://i.pravatar.cc/40",
          text: "This post was just created!",
          likes: 0,
          replies: [
            {
              user: "System",
              time: "Now",
              avatar: "https://i.pravatar.cc/40",
              text: "Welcome to the discussion!",
              likes: 0
            }
          ]
        }
      ]
    }
  };

  POSTS.push(newPost);

  this.router.navigate(['/']);
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