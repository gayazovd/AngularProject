import { Component, OnInit, OnChanges, DoCheck, ChangeDetectorRef, Inject } from '@angular/core';
import { PopupService } from 'src/app/core/popup.service';
import { DeletePopup, ListItem, PopupData } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {
  public isShow: boolean;
  public course: ListItem;
  public courseId: number;
  constructor(private coursesService: CoursesDataService, public dialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData) {
  }

  ngOnInit() {

  }
  /* ngDoCheck() {
         this.isShow = this.popup.isShow;
        this.course = this.popup.data && this.popup.data
        this.courseId = this.popup.courseId; 
  } */

  cancel() {
    this.dialogRef.close(false);
    /* this.popup.hide(); */
  }

  remove() {
    this.dialogRef.close(true);
    /*     this.coursesService.removeItem(this.courseId, this.course).subscribe();
        this.popup.hide(); */
  }

}
