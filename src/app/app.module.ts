import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule, Provider} from '@angular/core';
import {LoggerService} from './logger-module/logger.service';
import {environment} from '../environments/environment';
import {LoggerModuleModule} from './logger-module/logger-module.module';
import {ModuleAModule} from './module-a/module-a.module';
import {ModuleBModule} from './module-b/module-b.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyGlobalInterceptorService} from './my-global-interceptor.service';
import {AccueilComponent} from './accueil/accueil.component';
import {SuiteComponent} from './suite/suite.component';
import {CoreModule} from './core/core.module';

export const INTERCEPTORS: Provider[] = [
  {provide: HTTP_INTERCEPTORS, useClass: MyGlobalInterceptorService, multi: true},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SuiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
    //ModuleAModule.forConfig({'mock': true}),
    //ModuleBModule.forConfig({'mock': true})
  ],
  providers: [
    {
      provide: LoggerService, useValue: new LoggerService(!environment.production, /.*[App|Toto].*/)
    },
    ...INTERCEPTORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
