import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Course } from 'src/app/app.model';
import { CoursesDataService } from 'src/app/core/courses-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, DoCheck {
  public courses: Course[];

  constructor(private coursesService: CoursesDataService) { }

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }
  
  ngDoCheck(){
    this.courses = this.coursesService.getList();
  }

}
