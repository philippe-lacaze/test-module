import { Injectable } from '@angular/core';
import {SubjectSubscription} from 'rxjs/internal/SubjectSubscription';
import {Subject} from 'rxjs/index';

@Injectable()
export class ModalService {

  modalCommand: Subject<void> = new Subject();

  constructor() { }
}
