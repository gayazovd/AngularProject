import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Course, ListItem } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http.service';
import { PopupService } from 'src/app/core/popup.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public courses: Course[] = [];
  private count: number = 0;
  public isShow: boolean = true;
  private pageSize: number = 3;


  constructor(private coursesService: CoursesDataService, private cd: ChangeDetectorRef, private popup: PopupService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.coursesService.getList(this.count, this.pageSize).subscribe(data => {
      this.count = this.count + this.pageSize;
      this.courses = this.courses.concat(data.body)
      if (this.count >= data.count) {
        this.isShow = false;
      }
      this.cd.detectChanges();
    })
  }

  searchingCourse(textFragment: string) {
    this.coursesService.searchByCourses(textFragment).subscribe(data => {
      this.courses = data.body;
      this.isShow = false;
      this.cd.detectChanges();
    })
  }

  remove(course: Course) {
    this.popup.createPopup(course.id, course.listItem[0]);
    this.show();
  }

  show() {
    console.log(this.popup)
    this.popup.show()
  }

}
