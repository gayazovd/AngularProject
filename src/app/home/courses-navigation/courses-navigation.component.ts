import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.scss']
})
export class CoursesNavigationComponent implements OnInit {
  constructor() { }
  @Output() searchingCourse = new EventEmitter<string>();
  public searchValue: string;

  ngOnInit() {
  }

  searchCourses(e) {
    if (e.keyCode === 13) {
      console.log(this.searchValue)
      this.searchingCourse.emit(this.searchValue);
    }
  }

  addCourse() {
    console.log("Добавить курс!");
  }
}
