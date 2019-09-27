import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CoursesDataService } from 'src/app/core/courses-data.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.scss']
})
export class CoursesNavigationComponent implements OnInit {
  constructor(private coursesService: CoursesDataService) { }
  private _searchValue: FormControl;

  ngOnInit() {
    this._searchValue = new FormControl('')
  }

  get searchValue() {
    return this._searchValue;
  }

  searchCourses() {
    this.coursesService.searching(this.searchValue.value)
  }

  addCourse() {
    console.log("Добавить курс!");
  }
}
