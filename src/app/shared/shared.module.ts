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
import { FormsModule } from '@angular/forms';
import { AuthorsPipePipe } from './authors-pipe.pipe';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TitleComponent, DeletePopupComponent, NotFoundComponent, DatePipePipe, DurationPipePipe, CourseFormComponent, AuthorsPipePipe],
  imports: [CommonModule, RouterModule, FormsModule, MatDialogModule],
  exports: [HeaderComponent, FooterComponent, TitleComponent, DeletePopupComponent, DatePipePipe, DurationPipePipe, CourseFormComponent, AuthorsPipePipe, MatDialogModule]
})
export class SharedModule { }
