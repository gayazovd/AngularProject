import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from '../core/courses-data.service';
import { ListItem, IdByCourse, CreatedListItem } from '../app.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public listItem: ListItem;
  public idByCourse: IdByCourse;

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CoursesDataService) { }

  ngOnInit() {
    this.getParams();
    if (this.idByCourse && this.idByCourse.listItemId) {
      this.getCourse();
    }
  }

  getCourse() {
    this.courseService.getItemById(this.idByCourse.coursesId, this.idByCourse.listItemId).subscribe(data => { this.listItem = data })
  }

  getParams() {
    this.route.params.subscribe(params => {
      params.listItemId ? this.idByCourse = { coursesId: +params.coursesId, listItemId: +params.listItemId } : this.idByCourse = { coursesId: +params.coursesId, listItemId: null };
    });
  }

  save(listItem: ListItem) {
    if (this.idByCourse && this.idByCourse.listItemId) {
      this.courseService.putUpdateListItem(listItem, this.idByCourse).subscribe(() => this.router.navigate(['/courses-page']));
    } else {
      this.courseService.postCreateListItem(listItem, this.idByCourse.coursesId).subscribe(() => this.router.navigate(['/courses-page']))
    }
  }

}
