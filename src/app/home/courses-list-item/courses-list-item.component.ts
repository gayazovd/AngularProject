import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../app.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {


  constructor() { }
  @Output() delete = new EventEmitter<number>()
  @Input() course: ListItem

  ngOnInit() {
  }

  deleteLesson(id: number) {
    this.delete.emit(id);
  }

  edit() {
    console.log("изменить урок")
  }

}
