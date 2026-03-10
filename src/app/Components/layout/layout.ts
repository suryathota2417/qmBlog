import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Landing } from '../landing/landing';
import { Leftsidebar} from '../leftsidebar/leftsidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header,Footer,Landing,Leftsidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
