import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./public/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./public/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'user-confirmation',
    loadChildren: () =>
      import('./public/user-confirmation/user-confirmation.module').then(
        (m) => m.UserConfirmationModule
      ),
  },
  {
    path: 'user-menu',
    loadChildren: () =>
      import('./private/user-menu/user-menu.module').then(
        (m) => m.UserMenuModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
