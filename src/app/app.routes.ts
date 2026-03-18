import { Routes } from '@angular/router';
import { Explorepage } from './Posts-Pages/explorepage/explorepage';
import { Postdetailspage } from './Posts-Pages/postdetailspage/postdetailspage';
import { Createpostpage } from './Posts-Pages/createpostpage/createpostpage';
 
export const routes: Routes = [
  { path: '', component: Explorepage },
  {
    path: 'post/:id',
    component: Postdetailspage,
  },
  {
    path: 'create-post',
    component:Createpostpage
  }
];