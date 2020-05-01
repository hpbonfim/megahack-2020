import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable()
export class UserDataService {
  setPhoneNumber = (phoneNumber) =>
    window.localStorage.setItem('phoneNumber', phoneNumber);

  getPhoneNumber = () => window.localStorage.getItem('phoneNumber');

  setUserData = (userData) => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
  };

  getUserData = (): User =>
    JSON.parse(window.localStorage.getItem('userData')) as User;
}
