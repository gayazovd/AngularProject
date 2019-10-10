import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RoutingModule } from './routing/routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth-iterceptor';
import { StoreModule } from '@ngrx/store';
import { AuthReducer, coursesListReducer } from './login/reducer/auth-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
    declarations: [
        AppComponent,
        AddCourseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        HomeModule,
        LoginModule,
        RoutingModule,
        RouterModule,
        HttpClientModule,
        StoreModule.forRoot({ auth: AuthReducer, coursesList: coursesListReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
            features: {
                pause: false,
                lock: true,
                persist: true
            }
        })
    ],
    exports: [],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }

