import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from 'src/app/core/authorization.service';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { InfoAboutUser } from 'src/app/app.model';
import { Observable } from 'rxjs';
import { State } from 'src/app/login/reducer/auth-reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userInfo: string;

  constructor(private route: Router, private auth: AuthorizationService, private store: Store<{ auth: State }>) { }

  ngOnInit() {
    this.checkUserInfo();
    this.store.subscribe(state => {
      if (state.auth && state.auth.userInfo) {
        this.userInfo = `${state.auth.userInfo.name.first} ${state.auth.userInfo.name.last} `
      }
    })
  }

  checkUserInfo() {
    if (localStorage.getItem('token')) {
      this.auth.getUserInfo().subscribe()
    }
  }

  logOut() {
    this.auth.logout();
    this.userInfo = null;
    this.route.navigate(['/login']);
  }

}
