import { Component, OnInit, OnChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { PopupService } from 'src/app/core/popup.service';
import { DeletePopup, ListItem } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements DoCheck {
  public isShow: boolean;
  public course: ListItem;
  public courseId: number;
  constructor(private popup: PopupService, private coursesService: CoursesDataService) {
  }


  ngDoCheck() {
    this.isShow = this.popup.isShow;
    this.course = this.popup.data && this.popup.data
    this.courseId = this.popup.courseId;
  }

  cancel() {
    this.popup.hide();
  }

  remove() {
    this.coursesService.removeItem(this.courseId, this.course).subscribe();
    this.popup.hide();
  }

}
