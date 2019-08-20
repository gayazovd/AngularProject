import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesDataService } from '../core/courses-data.service';
import { ListItem } from '../app.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseId: number;
  public listItem: ListItem;

  constructor(private route: ActivatedRoute, private courseService: CoursesDataService) { }

  ngOnInit() {
    this.getParams();
    this.getCourse();
  }

  getCourse() {
    this.listItem = this.courseService.getItemById(this.courseId);
  }

  getParams() {
    this.route.params.subscribe(params => {
      return params.coursesId !== 'new' ? this.courseId = +params.coursesId : null;
    })
  }

}
