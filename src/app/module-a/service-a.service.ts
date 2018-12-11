import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {EntityA} from './entity-a';

@Injectable()
export class ServiceAService {

  private url = '/api/entitya';

  constructor(private httpClient: HttpClient) {
  }

  read(): Observable<EntityA> {
    return this.httpClient.get<EntityA>(this.url);
  }
}
