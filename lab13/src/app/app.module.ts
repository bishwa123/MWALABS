import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform.component';
import { PostComponent } from './post.component';


import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    ReactiveformComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
