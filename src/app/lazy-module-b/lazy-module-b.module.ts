import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleBRoutingModule } from './lazy-module-b-routing.module';
import {ModuleBModule} from '../module-b/module-b.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyModuleBRoutingModule,
    ModuleBModule.forConfig({'mock': true}),
  ]
})
export class LazyModuleBModule { }
