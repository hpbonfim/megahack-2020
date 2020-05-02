// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UserDataService } from '../services/user-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    // public jwtHelper: JwtHelperService,
    private userDataService: UserDataService
  ) {}

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
    return Boolean(this.userDataService.getUserData());
  }
}
