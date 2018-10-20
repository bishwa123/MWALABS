import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogServiceService } from './log-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:LogServiceService,useClass:LogServiceService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
