
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  a:number = 0;

  showPopup:boolean = false;

  showSearch:boolean = false;

  showMenu:boolean = false;

  popup(){
    this.showPopup = !this.showPopup;
  }

  toggleSearch(){
    this.showSearch = !this.showSearch;
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}