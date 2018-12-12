import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {LoggerService} from './logger-module/logger.service';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ModuleAModule.forConfig({'mock': true})
    // ModuleBModule.forConfig({'mock': true})
  ],
  providers: [{
    provide: LoggerService, useValue: new LoggerService(!environment.production, /.*[App|Toto].*/)
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
