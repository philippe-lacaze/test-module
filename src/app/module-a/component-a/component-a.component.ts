import { Component, OnInit } from '@angular/core';
import {ServiceAService} from '../service-a.service';
import {EntityA} from '../entity-a';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  entity: EntityA;

  constructor(private serviceA: ServiceAService) { }

  ngOnInit() {
    this.serviceA.read().subscribe(a => this.entity = a);
  }

}
