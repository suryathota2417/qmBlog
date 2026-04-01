
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../Services/search-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, DoCheck {

  constructor(
    private eRef: ElementRef, 
    private router: Router,
    private searchService: SearchService   
  ) {}

  notificationCount: number = 0;

  showPopup: boolean = false;
  showSearch: boolean = false;
  showMenu: boolean = false;

  isLoggedIn: boolean = false;

  user: any = null;

  ngOnInit() {
    this.checkLogin();
  }

  ngDoCheck() {
    this.checkLogin();
  }

  checkLogin() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (this.isLoggedIn) {
      const data = localStorage.getItem('user');
      this.user = data ? JSON.parse(data) : null;
    } else {
      this.user = null;
    }
  }

  goToLogin() {
    this.router.navigate(['/signin']);
  }

  popup() {
    this.showPopup = !this.showPopup;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.user = null;

    this.router.navigate(['/signin']);
  }

 
  onSearch(event: any) {
    const value = event.target.value;
    this.searchService.updateSearch(value);
  }

  onInputChange(event: any) {
  const value = event.target.value;

  if (!value || value.trim() === '') {
    this.searchService.updateSearch('');
  }
}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.showPopup = false;
      this.showMenu = false;
      this.showSearch = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    const width = window.innerWidth;

    if (width > 480) {
      this.showSearch = false;
      this.showMenu = false;
    }
  }
}