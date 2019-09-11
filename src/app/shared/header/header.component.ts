import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public login: string

  constructor(private route: Router, private auth: AuthorizationService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.checkUserInfo();
    this.auth.userData.subscribe(data => data ? this.login = `${data.name.first} ${data.name.last} ` : this.login = '');
  }

  checkUserInfo() {
    if (localStorage.getItem('token')) {
      this.auth.getUserInfo().subscribe()
    }
  }

  logOut() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
