import { Component, OnInit } from '@angular/core';
import {ServiceBService} from '../service-b.service';
import {EntityB} from '../entity-b';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  entity: EntityB;

  constructor(private serviceB: ServiceBService) { }

  ngOnInit() {
    this.serviceB.read().subscribe(b => this.entity = b);
  }

}
