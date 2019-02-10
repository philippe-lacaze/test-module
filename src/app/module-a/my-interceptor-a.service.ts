import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {ModalService} from '../core/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorAService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('MyInterceptorAService intercept ', req);
    this.messageService.modalCommand.next();
    return next.handle(req);
  }

  constructor(@Inject('messageService') private messageService: ModalService) {
    console.log('MyInterceptorAService.ctor');
  }
}
