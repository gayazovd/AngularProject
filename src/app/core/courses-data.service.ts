import { Injectable, ɵConsole } from '@angular/core';
import { Course, ListItem } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators'
import { HttpService } from './http.service';
const _ = require('lodash');

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  constructor(private http: HttpService) { }

  getList(): Observable<Course[]> {
    return this.http.getDataFromServer();
  }



  /*   createCourse(dataOfCreateCourse: ListItem, index: number) {
      this.coursesItems[index].listItem.push(dataOfCreateCourse);
    }
  
    getItemById(id: number) {
      let listItem: ListItem;
      this.coursesItems.forEach(course => {
        if (!listItem) {
          listItem = course.listItem.find(course => course.id === id);
        }
      });
      return listItem;
    }
  
    udateItem(dataOfUpdateCourse: ListItem) {
      let index: number;
      this.coursesItems.forEach(course => {
        if (index >= 0) return;
        index = course.listItem.findIndex(listItem => listItem.id === dataOfUpdateCourse.id)
      });
      this.coursesItems.forEach((course) => {
        if (course.listItem.some(listitem => listitem.id === dataOfUpdateCourse.id)) {
          course.listItem.splice(index, 1, dataOfUpdateCourse)
        }
      });
    }
  
    removeItem(dataOfCourse: ListItem) {
      const course = this.coursesItems.map(course => ({ ...course, listItem: course.listItem.filter(course => course.id != dataOfCourse.id) }))
      this.coursesItems = course;
      console.log(this.coursesItems)
    } */
}
