import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Landing } from '../landing/landing';

@Component({
  selector: 'app-layout',
  imports: [Header,Footer,Landing],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
