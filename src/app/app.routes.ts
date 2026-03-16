import { Routes } from '@angular/router';
import { Explorepage } from './Posts-Pages/explorepage/explorepage';
import { Postdetailspage } from './Posts-Pages/postdetailspage/postdetailspage';

export const routes: Routes = [
    {path: '', component: Explorepage},
    {path: 'post-details', component:Postdetailspage},

]
