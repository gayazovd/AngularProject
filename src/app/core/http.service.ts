import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Course, User, Pagination } from '../app.model';
import { map, filter, switchMap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postAuthUserOnServer(user: User) {
    return this.http.post("http://localhost:3004/auth/login", user).pipe(map(data => data), catchError(err => {
      alert(err.error);
      return throwError(err);
    }))
  }

  paging(start: number, count: number) {
    return this.http.get<Pagination<Course>>(`http://localhost:3004/courses?start=${start}&count=${count}`);
  }

  postForSearching(textFragment: string) {
    return this.http.get<Pagination<Course>>(`http://localhost:3004/courses?textFragment=${textFragment}`);
  }

  deleteCourse(courseId: number, listItemId: number) {
    return this.http.delete(`http://localhost:3004/courses/${courseId}/listItem/${listItemId}`)
  }
}
