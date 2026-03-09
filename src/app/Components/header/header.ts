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
  showPopup: boolean = false;

  popup(){
    this.showPopup = !this.showPopup;
  } 

}

