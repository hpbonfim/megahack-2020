import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './shared/auth/auth.guard.service';

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
    path: 'user-shell',
    loadChildren: () =>
      import('./private/user-shell/user-shell.module').then(
        (m) => m.UserShellModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'user-contract/:id',
    loadChildren: () =>
      import('./private/user-contract/user-contract.module').then(
        (m) => m.UserContractModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
