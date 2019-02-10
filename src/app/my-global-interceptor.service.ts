import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MyGlobalInterceptorService implements HttpInterceptor {

  constructor() {
    console.log('MyGlobalInterceptorService.ctor');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('MyGlobalInterceptorService intercept ', req);
    return next.handle(req);
  }
}
