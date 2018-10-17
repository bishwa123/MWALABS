import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 1;
  counterRef:number = 1;

  onCounterChanged(value){
    this.counterRef = value;
  }

}
