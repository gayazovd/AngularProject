import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [{ path: 'courses-page', component: AppComponent }, { path: '', redirectTo: '/courses-page', pathMatch: 'full' }]

@NgModule({
    declarations: [AppComponent, FilterPipe],
    imports: [BrowserModule, SharedModule, HomeModule, FormsModule,
        RouterModule.forRoot(
            appRoutes
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

