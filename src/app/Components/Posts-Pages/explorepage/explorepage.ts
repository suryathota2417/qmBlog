import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSTSJSONDATA } from '../../../Data/posts.data';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './explorepage.html',
  styleUrl: './explorepage.scss',
})
export class Explorepage implements OnInit {

  posts: any[] = [];

  ngOnInit() {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.posts = [...savedPosts, ...POSTSJSONDATA];
  }
}