import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from '../core/courses-data.service';
import { ListItem, IdByCourse } from '../app.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseId: number;
  public listItem: ListItem;
  public listItemId: number;
  public idByCourse: IdByCourse;

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CoursesDataService) { }

  ngOnInit() {
    this.getParams();
    this.getCourse();
  }

  getCourse() {
    this.courseService.getItemById(this.idByCourse.courseId, this.idByCourse.listItemId).subscribe(data => { this.listItem = data })
    // this.listItem = this.courseService.getItemById(this.courseId);
  }

  getParams() {
    this.route.params.subscribe(params => {
      params.coursesId !== 'new' ? this.idByCourse = { courseId: +params.coursesId, listItemId: +params.listItemId } : null;
    });
  }

  save() {
    // this.courseService.udateItem(this.listItem);
    this.router.navigate(['/courses-page']);
  }

  cancel() {
    this.router.navigate(['/courses-page']);
  }

}
