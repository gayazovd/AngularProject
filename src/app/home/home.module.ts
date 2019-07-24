import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent],
    imports: [CommonModule, FormsModule],
    exports: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent]
})
export class HomeModule { }
