import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Layout } from './Components/layout/layout';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('qmBlog');
}
