import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  constructor(private auth: AuthorizationService) { }

  ngOnInit() {

  }

  authorization() {
    const user = { login: this.login, password: this.password };
    this.auth.login(user);
    this.clear();
  }

  clear() {
    this.login = '';
    this.password = '';
  }

}
