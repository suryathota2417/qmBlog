import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TagService } from '../../../../service/tag';

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leftsidebar.html',
  styleUrl: './leftsidebar.scss',
})
export class Leftsidebar {
  isMenuOpen = false;

  constructor(private router: Router,
  private tagService: TagService
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onCreatePost() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
 
      this.router.navigate(['/create-post']);
    } else {
    
      alert('Please login to create a post');
    }
  }
  selectTag(tag: string) {
  this.tagService.setTag(tag);
}
}