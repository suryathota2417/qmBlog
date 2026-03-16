import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explorepage',
  imports: [CommonModule],
  templateUrl: './explorepage.html',
  styleUrl: './explorepage.scss',
})
export class Explorepage {
 posts = [
  {
    title: "Angular Routing Guide",
    category: "Technology",
    author: "John Doe",
    avatar: "https://i.pravatar.cc/40",
    date: "May 2026",
    readTime: 5,
    summary: "Learn how Angular routing works and how to build dynamic pages.",
    image: "https://via.placeholder.com/120",
    likes: 25,
    comments: 12
  },
  {
    title: "UI Design Tips",
    category: "Design",
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
    date: "May 2026",
    readTime: 4,
    summary: "Simple UI tips that improve your web application design.",
    image: "https://via.placeholder.com/120",
    likes: 18,
    comments: 5
  },
  {
    title: "UI Design Tips",
    category: "Design",
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/40?img=2",
    date: "May 2026",
    readTime: 4,
    summary: "Simple UI tips that improve your web application design.",
    image: "https://via.placeholder.com/120",
    likes: 18,
    comments: 5
  },
  {
    title: "Angular Routing Guide",
    category: "Technology",
    author: "John Doe",
    avatar: "https://i.pravatar.cc/40",
    date: "May 2026",
    readTime: 5,
    summary: "Learn how Angular routing works and how to build dynamic pages.",
    image: "https://via.placeholder.com/120",
    likes: 25,
    comments: 12
  },
];
}
