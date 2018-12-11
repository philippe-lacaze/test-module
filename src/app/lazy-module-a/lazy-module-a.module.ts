import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleARoutingModule } from './lazy-module-a-routing.module';
import {ModuleAModule} from '../module-a/module-a.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleAModule.forConfig({'mock': true}),
    LazyModuleARoutingModule,
  ]
})
export class LazyModuleAModule { }
