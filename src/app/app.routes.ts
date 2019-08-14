import { Routes } from "@angular/router";
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './home/main/main.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'courses-page', pathMatch: 'full' },
    { path: 'courses-page', component: MainComponent },
    { path: 'login', component: LoginComponent }
]