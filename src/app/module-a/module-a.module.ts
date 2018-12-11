import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleARoutingModule} from './module-a-routing.module';
import {ComponentAComponent} from './component-a/component-a.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryBackendConfigArgs, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from './mock-data';
import {ServiceAService} from './service-a.service';


@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    HttpClientModule
  ],
  providers: [
    ServiceAService
  ]
})
export class ModuleAModule {
  static forConfig(config: object): ModuleWithProviders {
    return {
      ngModule: ModuleAModule,
      providers: config['mock'] === true ? InMemoryWebApiModule.forRoot(MockData, {apiBase: 'a/'} as InMemoryBackendConfigArgs).providers : []
    };
  }
}
