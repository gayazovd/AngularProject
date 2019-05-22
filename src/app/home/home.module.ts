import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';

@NgModule({
    declarations: [CoursesNavigationComponent],
    imports: [CommonModule],
    exports: [CoursesNavigationComponent]
})
export class HomeModule {}
