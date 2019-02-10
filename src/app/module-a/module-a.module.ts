import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleARoutingModule} from './module-a-routing.module';
import {ComponentAComponent} from './component-a/component-a.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {InMemoryBackendConfigArgs, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from './mock-data';
import {ServiceAService} from './service-a.service';
import {MyInterceptorAService} from './my-interceptor-a.service';
import {CoreModule, StaticCoreModule} from '../core/core.module';


@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    HttpClientModule,
    StaticCoreModule.forChild()
  ],
  providers: [
    ServiceAService,
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorAService, multi: true}
  ]
})
export class ModuleAModule {
  static forConfig(config: object): ModuleWithProviders {
    return {
      ngModule: ModuleAModule,
      providers: [
        ...config['interceptors'],
        ...config['mock'] === true ? InMemoryWebApiModule.forRoot(MockData, {apiBase: 'a/'} as InMemoryBackendConfigArgs).providers : [],
      ]
    };
  }
}
