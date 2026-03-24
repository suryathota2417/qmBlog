import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSTSJSONDATA } from '../../../Data/posts.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-myposts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './myposts.html',
  styleUrl: './myposts.scss',
})
export class Myposts implements OnInit {

  myPosts: any[] = [];
  currentUserId = 'user1'; 

  ngOnInit() {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    const allPosts = [...savedPosts, ...POSTSJSONDATA];

    this.myPosts = allPosts.filter(
      post => post.authorId === this.currentUserId
    );
  }

  deletePost(id: number) {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');

    posts = posts.filter((p: any) => p.id !== id);

    localStorage.setItem('posts', JSON.stringify(posts));
    this.myPosts = this.myPosts.filter(p => p.id !== id);
  }
}