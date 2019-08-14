import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { FormsModule } from '@angular/forms';
import { ChangeBorderColorDirective } from './courses-list-item/change-border-color.directive';
import { DurationPipePipe } from './courses-list-item/duration-pipe.pipe';
import { DatePipePipe } from './courses-list-item/date-pipe.pipe';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent, ChangeBorderColorDirective, DurationPipePipe, DatePipePipe, MainComponent],
    imports: [CommonModule, FormsModule, SharedModule],
    exports: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent, MainComponent]
})
export class HomeModule { }
