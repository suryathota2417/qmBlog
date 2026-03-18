
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { POSTSJSONDATA } from '../../../Data/posts.data';

@Component({
  selector: 'app-postdetailspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postdetailspage.html',
  styleUrl: './postdetailspage.scss',
})
export class Postdetailspage {

  post:any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Post ID from route:', id);

    this.post = POSTSJSONDATA.find(p => p.id === id);

  }

}
