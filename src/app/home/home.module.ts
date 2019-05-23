import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

@NgModule({
    declarations: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent],
    imports: [CommonModule],
    exports: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent]
})
export class HomeModule {}
