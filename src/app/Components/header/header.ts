
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private eRef: ElementRef) {}

  notificationCount: number = 0;

  showPopup: boolean = false;
  showSearch: boolean = false;
  showMenu: boolean = false;

  popup() {
    this.showPopup = !this.showPopup;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
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