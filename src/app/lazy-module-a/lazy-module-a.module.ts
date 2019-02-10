import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleARoutingModule } from './lazy-module-a-routing.module';
import {ModuleAModule} from '../module-a/module-a.module';
import {LoggerService} from '../logger-module/logger.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {INTERCEPTORS} from '../app.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleAModule.forConfig({'mock': true, interceptors: INTERCEPTORS}),
    LazyModuleARoutingModule,
  ]
})
export class LazyModuleAModule {
  static forConfig(enabled: boolean): ModuleWithProviders {
    return {
      ngModule: LazyModuleAModule,
      providers: [
        {provide: LoggerService, useValue: new LoggerService(enabled)}
      ]
    };
  }
}
