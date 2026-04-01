import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { POSTSJSONDATA } from '../../../Data/posts.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postdetailspage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './postdetailspage.html',
  styleUrl: './postdetailspage.scss',
})
export class Postdetailspage {

  newComment: string = '';
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    let savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    let post = savedPosts.find((p: any) => p.id === id);

    if (!post) {
      const jsonPost = POSTSJSONDATA.find(p => p.id === id);

      if (jsonPost) {
        savedPosts.push(jsonPost);
        localStorage.setItem('posts', JSON.stringify(savedPosts));
        post = jsonPost;
      }
    }

    this.post = post;

    if (!this.post.details) {
      this.post.details = {};
    }

    if (!this.post.details.comments) {
      this.post.details.comments = [];
    }
  }

  saveToLocalStorage() {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');

    const index = posts.findIndex((p: any) => p.id === this.post.id);

    if (index !== -1) {
      posts[index] = this.post;
    } else {
      posts.push(this.post);
    }

    localStorage.setItem('posts', JSON.stringify(posts));
  }


  getTimeAgo(time: any): string {
    const now = new Date().getTime();
    const past = new Date(time).getTime();

    const diff = Math.floor((now - past) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return Math.floor(diff / 60) + " min ago";

    return Math.floor(diff / 3600) + " hr ago";
  }
  addComment() {
    if (!this.newComment.trim()) return;

    const comment = {
      user: "You",
      time: new Date().getTime(),
      avatar: "https://i.pravatar.cc/40",
      text: this.newComment,
      likes: 0,
      replies: [],
      showReplyBox: false,
      replyText: ''
    };

    this.post.details.comments.unshift(comment);

    this.saveToLocalStorage();

    this.newComment = '';
  }

  toggleReplyBox(item: any) {
    item.showReplyBox = !item.showReplyBox;
  }

  addReply(item: any) {
    if (!item.replyText?.trim()) return;

    const reply = {
      user: "You",
      time: new Date().getTime(),
      avatar: "https://i.pravatar.cc/40",
      text: item.replyText,
      likes: 0,
      replies: [],
      showReplyBox: false,
      replyText: ''
    };

    if (!item.replies) {
      item.replies = [];
    }

    item.replies.push(reply);

    item.replyText = '';
    item.showReplyBox = false;

    this.saveToLocalStorage();
  }

}