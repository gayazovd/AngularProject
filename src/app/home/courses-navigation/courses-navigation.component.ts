import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CoursesDataService } from 'src/app/core/courses-data.service';


@Component({
  selector: 'app-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.scss']
})
export class CoursesNavigationComponent implements OnInit {
  constructor(private coursesService: CoursesDataService) { }
  public searchValue: string;

  ngOnInit() {
  }

  searchCourses(e) {
    const inputValue = e.target.value;
    this.coursesService.searching(inputValue)
  }

  addCourse() {
    console.log("Добавить курс!");
  }
}
