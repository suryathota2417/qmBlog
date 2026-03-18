import { Routes } from '@angular/router';
import { Explorepage } from './Posts-Pages/explorepage/explorepage';
import { Postdetailspage } from './Posts-Pages/postdetailspage/postdetailspage';
import { Signin } from './Accounts/Authentications/signin/signin';
import { Signup } from './Accounts/Authentications/signup/signup';
import { Profile } from './Accounts/ProfileData/profile/profile';

export const routes: Routes = [
  {path: 'signin', component: Signin},
  {path: 'signup', component: Signup},
  { path: '', component: Explorepage },
  {
    path: 'post/:id',
    component: Postdetailspage,
  },
  {path:'profile',component:Profile}
];
