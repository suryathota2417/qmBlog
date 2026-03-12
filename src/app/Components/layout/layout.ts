import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Leftsidebar } from './Components/leftsidebar/leftsidebar';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header,Footer,Leftsidebar,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
