import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TitleComponent } from './title/title.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DatePipePipe } from './date-pipe.pipe';
import { DurationPipePipe } from './duration-pipe.pipe';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateFormatValidatorDirective } from './date-format-validator.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    DeletePopupComponent,
    NotFoundComponent,
    DatePipePipe,
    DurationPipePipe,
    CourseFormComponent,
    LoadingSpinnerComponent,
    DatePickerComponent,
    DateFormatValidatorDirective
  ],
  entryComponents: [
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    DeletePopupComponent,
    DatePipePipe,
    DurationPipePipe,
    CourseFormComponent,
    MatDialogModule,
    MatButtonModule,
    LoadingSpinnerComponent,
    NgSelectModule,
    DatePickerComponent
  ]
})
export class SharedModule { }
