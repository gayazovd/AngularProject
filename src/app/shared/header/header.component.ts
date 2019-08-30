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
    if (this.auth.isAuthenticated()) {
      this.login = this.auth.getUserInfo();
    }
  }

  logOut() {

  }

}
