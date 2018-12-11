import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleBRoutingModule} from './module-b-routing.module';
import {ComponentBComponent} from './component-b/component-b.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryBackendConfigArgs, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from './mock-data';
import {ServiceBService} from './service-b.service';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [
    CommonModule,
    ModuleBRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServiceBService
  ]
})
export class ModuleBModule {
  static forConfig(config: object): ModuleWithProviders {
    return {
      ngModule: ModuleBModule,
      providers: config['mock'] === true ? InMemoryWebApiModule.forRoot(MockData, {apiBase: 'a/'} as InMemoryBackendConfigArgs).providers : []
    };
  }
}
