import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('/api/auth/login')) {
            return next.handle(req);
        }

        const userToken = JSON.parse(localStorage.getItem('token'));
        const authReq = req.clone({
            headers: req.headers.set("Authorization", userToken.token)
        })
        return next.handle(authReq)
    }
}
