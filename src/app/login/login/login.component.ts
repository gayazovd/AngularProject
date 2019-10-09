import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../reducer/auth-reducer';
import { AuthActionTypes } from '../actions/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _user: FormGroup;
  constructor(private store: Store<{ authUser: State }>, private auth: AuthorizationService) {

  }

  ngOnInit() {
    this._user = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  }

  get user() {
    return this._user;
  }

  authorization() {
    console.log(this.user.value)
    const user = this.user.value;
    this.auth.login(user).pipe(
      switchMap(() => this.auth.getUserInfo())
    ).subscribe();
    this.clear();
  }

  clear() {
    this.user.patchValue({});
  }

}
