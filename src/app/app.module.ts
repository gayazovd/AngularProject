import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { LoginModule } from './login/login.module';



@NgModule({
    declarations: [AppComponent, FilterPipe],
    imports: [BrowserModule, SharedModule, HomeModule, FormsModule,LoginModule,
        RouterModule.forRoot(
            ROUTES
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

