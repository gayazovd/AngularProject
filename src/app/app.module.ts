import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{ path: 'courses-page', component: AppComponent }, { path: '', redirectTo: '/courses-page', pathMatch: 'full' }]

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, HomeModule, FormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
