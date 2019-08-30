import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Course, User } from '../app.model';
import { map, filter, switchMap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getDataFromServer() {
    return this.http.get<Course[]>("http://localhost:3004/courses")
  }

  postAuthUserOnServer(user: User) {
    return this.http.post("http://localhost:3004/auth/login", user).pipe(map(data => data), catchError(err => {
      alert(err.error);
      return throwError(err);
    }))
  }
}
