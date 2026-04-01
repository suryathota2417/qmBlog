import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSTSJSONDATA } from '../../../Data/posts.data';
import { RouterLink, RouterModule } from '@angular/router';
import { TagService } from '../../../service/tag';

@Component({
  selector: 'app-explorepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './explorepage.html',
  styleUrl: './explorepage.scss',
})
export class Explorepage implements OnInit {
  allPosts: any[] = [];
  posts: any[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit() {

    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    this.allPosts = [...savedPosts, ...POSTSJSONDATA];
    this.posts = [...this.allPosts];
    this.tagService.selectedTag$.subscribe(tag => {

      console.log('Received tag:', tag);
      if (!tag) {
        this.posts = [...this.allPosts];
      } 
      else {
        this.posts = this.allPosts.filter(post =>
          post.details?.tags?.includes(tag)
        );
      }

    });
  }
}