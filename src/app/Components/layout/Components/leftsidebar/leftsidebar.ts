import { Component } from '@angular/core';

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [],
  templateUrl: './leftsidebar.html',
  styleUrl: './leftsidebar.scss',
})
export class Leftsidebar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
