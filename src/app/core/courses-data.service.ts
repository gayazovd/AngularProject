import { Injectable, ɵConsole } from '@angular/core';
import { Course, ListItem, Pagination, IdByCourse } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators'
import { HttpService } from './http.service';
const _ = require('lodash');

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  private _searchingCourse = new Subject<string>();
  public searchingCourse = this._searchingCourse.asObservable().pipe(
    debounceTime(100),
    map(value => value.length >= 3 ? value : '')
  );

  constructor(private http: HttpService) {

  }

  searching(value: string) {
    this._searchingCourse.next(value);
  }

  getList(count: number, pageSize: number): Observable<Pagination<Course>> {
    return this.http.paging(count, pageSize);
  }


  searchByCourses(textFragment: string) {
    return this.http.postForSearching(textFragment);
  }


  getItemById(courseId: number, listItemId: number): Observable<ListItem> {
    return this.http.getCourseById(courseId, listItemId)
  }

  putUpdateListItem(listItem: ListItem, idByCourse: IdByCourse) {
    return this.http.putUpdateListItem(listItem, idByCourse);
  }

  postCreateListItem(listItem: ListItem, courseId: number) {
    return this.http.postCreateListItem(listItem, courseId);
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
