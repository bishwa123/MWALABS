import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { TestdirectiveDirective } from './testdirective.directive';
import { ArrayComponent } from './array.component';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MynewcolorDirective } from './mynewcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TestdirectiveDirective,
    ArrayComponent,
    MyvisibilityDirective,
    MynewcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
