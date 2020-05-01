import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'user-confirmation/:phoneNumber',
    loadChildren: () => import('./user-confirmation/user-confirmation.module').then(m => m.UserConfirmationModule)
  },
  { path: 'user-menu', loadChildren: () => import('./user-menu/user-menu.module').then(m => m.UserMenuModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
