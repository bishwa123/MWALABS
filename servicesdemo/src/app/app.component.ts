import { Component } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <button (click)='onLog($event)'>Log Me</button>
     
  `,
  styles: []
})
export class AppComponent {
  title = 'servicesdemo';
  constructor(private logService:LogServiceService){

  }
  onLog(value){
    this.logService.logMe(value);
  }

}
