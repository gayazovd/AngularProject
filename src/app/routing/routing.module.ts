import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from '../home/main/main.component';
import { LoginComponent } from '../login/login/login.component';
import { AuthGuard } from '../login/auth.guard';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'courses-page', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
