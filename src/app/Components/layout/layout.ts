import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Leftsidebar } from './Components/leftsidebar/leftsidebar';
import { Postdetailspage } from '../Posts-Pages/postdetailspage/postdetailspage';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,Header,Footer,Leftsidebar,Postdetailspage],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
