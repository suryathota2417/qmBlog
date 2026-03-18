import { Routes } from '@angular/router';
import { Explorepage } from './Components/Posts-Pages/explorepage/explorepage';
import { Postdetailspage } from './Components/Posts-Pages/postdetailspage/postdetailspage';
import { Signin } from './Components/Accounts/Authentications/signin/signin';
import { Signup } from './Components/Accounts/Authentications/signup/signup';
import { Profile } from './Components/Accounts/ProfileData/profile/profile';

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
  {
    path: 'create-post',
    component:Createpostpage
  }
];
