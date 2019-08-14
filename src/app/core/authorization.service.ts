import { Injectable } from '@angular/core';
import { User } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public userData: User;

  constructor() { }

  login(data: User) {
    this.userData = data;
    localStorage.setItem("token", JSON.stringify(this.userData.token))
  }

  logout() {
    localStorage.removeItem('token')
  }

  getUserInfo() {
    return this.userData.login;
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
