import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TagService {
 private selectedTag = new BehaviorSubject<string | null>(null);
 selectedTag$ = this.selectedTag.asObservable();

 setTag(tag: string | null) {
   this.selectedTag.next(tag);
 }
}
  