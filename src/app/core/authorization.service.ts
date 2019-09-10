import { Injectable } from '@angular/core';
import { User } from '../app.model';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _userData = new Subject<User>();
  public userData = this._userData.asObservable();

  constructor(private route: Router, private http: HttpService) { }

  login(user: User) {
    this.http.postAuthUserOnServer(user).subscribe(token => {
      localStorage.setItem("token", JSON.stringify(token));
      this._userData.next(user);
      this.route.navigate(["courses-page"]);
    });
  }


  logout() {
    localStorage.removeItem('token');
  }

  getUserInfo() {
    return this.userData;
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
