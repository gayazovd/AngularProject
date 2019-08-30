import { Injectable } from '@angular/core';
import { User } from '../app.model';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public userData: User;

  constructor(private route: Router, private http: HttpService) { }

  login(user: User) {
    this.http.postAuthUserOnServer(user).subscribe(token => {
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("login", JSON.stringify(user.login))
      this.route.navigate(["courses-page"]);
    });
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
  }

  getUserInfo() {
    return localStorage.getItem('login')
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
