import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from '../../app.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent implements OnInit {

  @Output() delete = new EventEmitter<ListItem>()
  @Input() course: ListItem
  constructor() {
  }

  ngOnInit() {
  }

  deleteLesson(course: ListItem) {
    this.delete.emit(course);
  }

  edit() {
    console.log("изменить урок")
  }

  addFavorites() {
    this.course.isTopRated = !this.course.isTopRated;
  }

}
