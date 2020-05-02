import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserDataService } from '../services/user-data.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
