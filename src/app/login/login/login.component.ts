import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _user: FormGroup;
  constructor(private auth: AuthorizationService) { }

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
