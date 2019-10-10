import { Injectable } from '@angular/core';
import { User, InfoAboutUser } from '../app.model';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Subject, Observable, of, timer, combineLatest } from 'rxjs';
import { switchMap, debounceTime, map, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { Store } from '@ngrx/store';
import { State } from '../login/reducer/auth-reducer';
import { AuthActionTypes } from '../login/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _userData = new Subject<InfoAboutUser>();
  public userData = this._userData.asObservable();

  constructor(private route: Router, private http: HttpService, private load: LoadingService, private store: Store<{ authUser: State }>) { }

  login(user: User) {
    this.load.changeLoadState(true);
    return combineLatest(this.http.postAuthUserOnServer(user).pipe(tap(token => {
      localStorage.setItem("token", JSON.stringify(token));
      this.load.changeLoadState(false)
      this.store.dispatch({ type: AuthActionTypes.LoginSuccess, payload: user });
      this.route.navigate(["courses-page"]);
    })), timer(500))
  }


  logout() {
    localStorage.removeItem('token');
    this.store.dispatch({ type: AuthActionTypes.GetUserInfo, payload: null })
  }

  getUserInfo() {
    return this.http.getUserInfo().pipe(tap(user => this.store.dispatch({ type: AuthActionTypes.GetUserInfo, payload: user })/* this._userData.next(user) */));
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
