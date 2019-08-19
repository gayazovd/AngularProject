import { Injectable } from '@angular/core';
import { User } from '../app.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public userData: User;

  constructor(private route: Router) { }

  login(data: User) {
    if (data.login === "Login" && data.password === '12345') {
      this.userData = data;
      localStorage.setItem("token", JSON.stringify(this.userData.token));
      this.route.navigate(["courses-page"]);
    }
  }

  logout() {
    localStorage.removeItem('token')
  }

  getUserInfo() {
    return this.userData.login;
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
