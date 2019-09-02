import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Course } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http.service';

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


  constructor(private coursesService: CoursesDataService, private cd: ChangeDetectorRef) { }

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


}
