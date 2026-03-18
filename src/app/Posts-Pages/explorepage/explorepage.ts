 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  POSTSJSONDATA } from '../../Data/posts.data';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorepage',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './explorepage.html',
  styleUrl: './explorepage.scss',
})
export class Explorepage {

posts = POSTSJSONDATA;

}