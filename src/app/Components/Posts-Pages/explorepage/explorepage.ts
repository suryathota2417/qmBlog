
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSTSJSONDATA } from '../../../Data/posts.data';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchService } from '../../../Services/search-service';

@Component({
  selector: 'app-explorepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './explorepage.html',
  styleUrl: './explorepage.scss',
})
export class Explorepage implements OnInit {

  posts: any[] = [];
  filteredPosts: any[] = [];   
  paginatedPosts: any[] = [];

  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 0;
  searchText: string = '';

  constructor(private searchService: SearchService) {} 

  ngOnInit() {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.posts = [...savedPosts, ...POSTSJSONDATA];

    this.filteredPosts = this.posts;

   
    this.searchService.currentSearch$.subscribe(searchText => {

      this.searchText = searchText; 

      const value = searchText.toLowerCase();

      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(value) ||
        post.author.toLowerCase().includes(value) ||
        post.category.toLowerCase().includes(value)
      );

      this.currentPage = 1;
      this.totalPages = Math.ceil(this.filteredPosts.length / this.pageSize);

      this.updatePagination();
    });

    this.totalPages = Math.ceil(this.posts.length / this.pageSize);
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedPosts = this.filteredPosts.slice(startIndex, endIndex); // ✅ UPDATED
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {   
      this.currentPage--;
      this.updatePagination();
    }
  }

  getPagesArray() {
    return Array(this.totalPages).fill(0);
  }
}