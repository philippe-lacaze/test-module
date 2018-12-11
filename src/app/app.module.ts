import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
