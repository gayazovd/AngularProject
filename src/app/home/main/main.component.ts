import { Component, OnInit, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Course } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private coursesService: CoursesDataService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.coursesService.getList().subscribe(data => {
      this.courses = data;
      this.cd.detectChanges();
    })
  }


}
