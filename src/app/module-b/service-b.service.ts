import {forwardRef, ForwardRefFn, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {EntityB} from './entity-b';
import {ModuleBModule} from './module-b.module';

@Injectable()
export class ServiceBService {

  private url = '/api/entityb';

  constructor(private httpClient: HttpClient) { }

  read(): Observable<EntityB> {
    return this.httpClient.get<EntityB>(this.url);
  }
}
