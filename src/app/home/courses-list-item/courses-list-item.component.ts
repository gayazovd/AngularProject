import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from '../../app.model';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/shared/delete-popup/delete-popup.component';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent implements OnInit {

  @Output() delete = new EventEmitter<ListItem>()
  @Input() course: ListItem;
  @Input() courseId: number;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  deleteLesson(listItem: ListItem) {

  /*   const dialogRef =  */this.dialog.open(DeletePopupComponent, {
    width: '400px',
    data: { id: this.courseId, listItem: listItem }
  });

    /*     dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result)
        }); */
  }

  edit() {
    console.log("изменить урок")
  }

  addFavorites() {
    this.course.isTopRated = !this.course.isTopRated;
  }

}
