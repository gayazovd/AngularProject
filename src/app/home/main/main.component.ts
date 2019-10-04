import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Course, ListItem } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http.service';
import { PopupService } from 'src/app/core/popup.service';

import { fromEvent, pipe } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { LoadingService } from 'src/app/core/loading.service';

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
  public readonly pageSize: number = 3;


  constructor(private coursesService: CoursesDataService, private cd: ChangeDetectorRef, private load: LoadingService) { }

  ngOnInit() {
    this.loadData();
    this.searchingCourse();
  }

  loadData() {
    this.coursesService.getList(this.count, this.pageSize).subscribe(([data]) => {
      this.count = this.count + this.pageSize;
      this.courses = this.courses.concat(data.body)
      if (this.count >= data.count) {
        this.isShow = false;
      }
      this.load.changeLoadState(false)
      this.cd.detectChanges();
    })
  }

  searchingCourse() {
    this.coursesService.searchingCourse.pipe(
      switchMap(val => this.coursesService.searchByCourses(val))
    ).subscribe(([data]) => {
      this.courses = data.body;
      this.isShow = false;
      this.load.changeLoadState(false);
      this.cd.detectChanges();
    })
  }

  remove() {

    this.count = 0;
    this.courses = [];
    this.loadData();
  }

  show() {

  }

}
