import { Component } from '@angular/core';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leftsidebar.html',
  styleUrl: './leftsidebar.scss',
})
export class Leftsidebar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
