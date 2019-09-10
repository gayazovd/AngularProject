import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public login: string

  constructor(private auth: AuthorizationService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.auth.getUserInfo().subscribe(user => {
      this.login = user.login;
    });
  }

  logOut() {

  }

}
