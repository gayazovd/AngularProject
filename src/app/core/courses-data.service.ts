import { Injectable, ɵConsole } from '@angular/core';
import { Course, ListItem, Pagination } from '../app.model';
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

  getList(count: number, pageSize: number): Observable<Pagination<Course>> {
    return this.http.paging(count, pageSize);
  }


  searchByCourses(textFragment: string) {
    return this.http.postForSearching(textFragment);
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
    }*/

  removeItem(courseId: number, dataOfCourse: ListItem) {
    return this.http.deleteCourse(courseId, dataOfCourse.id);
  }
}
