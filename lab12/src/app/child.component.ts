import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p *ngIf = "show; else elseBlock">
      child works!
    </p>
    <ng-template #elseBlock>else blovk</ng-template>
    <h2 [style.background-color] ='red'>style me</h2>
    <h1 [ngStyle]="{'background-color':'black','height.px':'50'}">style me by ngstyle</h1>
    <h2 [ngClass]="['special','not-special']">add class</h2>
    <h3 appTestdirective shadow="5px 5px 1px cyan">directive</h3>
  `,
  styles: [`
    .special{
        background-color:red;
    }
    .not-special{
      height:300px;
  }
  `]
})
export class ChildComponent implements OnInit {
  show = true;
  red = 'red';
  h=50;
  constructor() { }

  ngOnInit() {
  }

}
