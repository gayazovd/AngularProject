import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = JSON.parse(localStorage.getItem('token'));
        const authReq = req.clone({
            headers: req.headers.set("token", userToken.token)
        })
        return next.handle(authReq)
    }
}
