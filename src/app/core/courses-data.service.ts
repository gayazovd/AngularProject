import { Injectable, ɵConsole } from '@angular/core';
import { Course, ListItem, Pagination, IdByCourse } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, combineLatest, timer } from 'rxjs';
import { map, filter, switchMap, debounceTime, tap } from 'rxjs/operators'
import { HttpService } from './http.service';
import { LoadingService } from './loading.service';
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

  constructor(private http: HttpService, private load: LoadingService) {

  }

  searching(value: string) {
    this._searchingCourse.next(value);
  }

  getList(count: number, pageSize: number) {
    this.load.changeLoadState(true)
    return combineLatest(this.http.paging(count, pageSize), timer(500))
  }


  searchByCourses(textFragment: string) {
    this.load.changeLoadState(true)
    return combineLatest(this.http.postForSearching(textFragment), timer(500))
  }


  getItemById(courseId: number, listItemId: number) {
    this.load.changeLoadState(true);
    return combineLatest(this.http.getCourseById(courseId, listItemId), timer(500))
  }

  putUpdateListItem(listItem: ListItem, idByCourse: IdByCourse) {
    return this.http.putUpdateListItem(listItem, idByCourse)
  }

  postCreateListItem(listItem: ListItem, courseId: number) {
    return this.http.postCreateListItem(listItem, courseId);
  }


  removeItem(courseId: number, dataOfCourse: ListItem) {
    return this.http.deleteCourse(courseId, dataOfCourse.id)
  }

  getAuthors() {
   return this.http.getAuthors();
  }
}
