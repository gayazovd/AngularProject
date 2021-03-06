import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { FormsModule } from '@angular/forms';
import { ChangeBorderColorDirective } from '../shared/change-border-color.directive';
import { DurationPipePipe } from '../shared/duration-pipe.pipe';
import { DatePipePipe } from '../shared/date-pipe.pipe';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletePopupComponent } from '../shared/delete-popup/delete-popup.component';



@NgModule({
    declarations: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent, ChangeBorderColorDirective, MainComponent],
    imports: [SharedModule],
    exports: [CoursesNavigationComponent, CoursesListComponent, CoursesListItemComponent, MainComponent]
})
export class HomeModule { }
