import { Routes } from '@angular/router';
import { Explorepage } from './Components/Posts-Pages/explorepage/explorepage';
import { Postdetailspage } from './Components/Posts-Pages/postdetailspage/postdetailspage';
import { Signin } from './Components/Accounts/Authentications/signin/signin';
import { Signup } from './Components/Accounts/Authentications/signup/signup';
import { Profile } from './Components/Accounts/ProfileData/profile/profile';
import { Createpostpage } from './Components/Posts-Pages/createpostpage/createpostpage';

export const routes: Routes = [
  {path: '', component: Explorepage},
  {path: 'signin', component: Signin},
  {path: 'signup', component: Signup},
  { path: 'create-post', component: Createpostpage },
  {
    path: 'post/:id',
    component: Postdetailspage,
  },
  {path:'profile',component:Profile}
];

