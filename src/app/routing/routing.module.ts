import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from '../home/main/main.component';
import { LoginComponent } from '../login/login/login.component';
import { AuthGuard } from '../login/auth.guard';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { AddCourseComponent } from '../add-course/add-course.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'courses-page', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'courses-page/:coursesId/listItem/:listItemId', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: 'courses-page/new', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
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
