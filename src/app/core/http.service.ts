import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Course, User, Pagination, ListItem, IdByCourse, InfoAboutUser, AuthorFromServer } from '../app.model';
import { map, filter, switchMap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postAuthUserOnServer(user: User) {
    return this.http.post("/api/auth/login", user).pipe(map(data => data), catchError(err => {
      alert(err.error);
      return throwError(err);
    }))
  }

  paging(start: number, count: number) {
    return this.http.get<Pagination<Course>>(`api/courses?start=${start}&count=${count}`);
  }

  postForSearching(textFragment: string) {
    return this.http.get<Pagination<Course>>(`api/courses?textFragment=${textFragment}`);
  }

  deleteCourse(courseId: number, listItemId: number) {
    return this.http.delete(`api/courses/${courseId}/listItem/${listItemId}`);
  }

  getCourseById(courseId: number, listItemId: number): Observable<ListItem> {
    return this.http.get<ListItem>(`api/courses/${courseId}/listItem/${listItemId}`);
  }

  putUpdateListItem(listItem: ListItem, idByCourse: IdByCourse) {
    return this.http.put(`api/courses/${idByCourse.coursesId}/listItem/${idByCourse.listItemId}`, listItem);
  }

  postCreateListItem(listItem: ListItem, courseId: number) {
    return this.http.post(`api/courses/${courseId}`, listItem);
  }

  getUserInfo() {
    return this.http.get<InfoAboutUser>('/api/auth/userinfo');
  }

  getAuthors() {
    return this.http.get<AuthorFromServer[]>('/api/authors');
  }

}
