import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { LoginModule } from './login/login.module';
import { RoutingModule } from './routing/routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './add-course/edit/edit.component';
import { CreateComponent } from './add-course/create/create.component';



@NgModule({
    declarations: [AppComponent, FilterPipe, AddCourseComponent, EditComponent, CreateComponent],
    imports: [BrowserModule, SharedModule, HomeModule, FormsModule, LoginModule,
        RoutingModule, RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

