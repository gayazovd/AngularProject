import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.scss']
})
export class CoursesNavigationComponent implements OnInit {
  searchValue: string = "";
  constructor() { }

  ngOnInit() {
  }
  searchCourse(e) {
    if (e.keyCode === 13) {
      console.log(this.searchValue);
    }
  }
  addCourse() {
    console.log("Добавить курс!");
  }
}
