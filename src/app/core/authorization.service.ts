import { Injectable } from '@angular/core';
import { User, InfoAboutUser } from '../app.model';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Subject, Observable, of } from 'rxjs';
import { switchMap, debounceTime, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _userData = new Subject<InfoAboutUser>();
  public userData = this._userData.asObservable();

  constructor(private route: Router, private http: HttpService) { }

  login(user: User) {
    return this.http.postAuthUserOnServer(user).pipe(tap(token => {
      localStorage.setItem("token", JSON.stringify(token));
      this.route.navigate(["courses-page"]);
    }))
  }


  logout() {
    localStorage.removeItem('token');
    this._userData.next(null);
  }

  getUserInfo() {
    return this.http.getUserInfo().pipe(tap(user => this._userData.next(user)));
  }



  isAuthenticated(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      return of(true);
    } else {
      this.route.navigate(['login']);
      return of(false);
    }
  }
}
