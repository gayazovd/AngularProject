import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from 'src/app/app.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../../add-course/add-course.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() listItem: ListItem

  constructor() { }

  ngOnInit() {
    if (!this.listItem) {
      this.listItem = { id: null, title: '', description: null, video: null, duration: null, star: null, startDate: null, students: null }
    }
  }

}
