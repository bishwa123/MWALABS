import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-array',
  template: `
    <p>element changed color property to {{color}}</p>
    <ul [ngStyle] ="{display:'inline-block'}" appMyvisibility [show] ="show"  appMynewcolor color ="red" (OnColorChanged) = 'showColor($event)'>
    <li *ngFor="let city of cities">
      {{ city }}
    </li>
    </ul>
    <h2  appMynewcolor color ="red" (OnColorChanged) = 'showColor($event)'>change me</h2>
    <h2  appMynewcolor color ="blue" (OnColorChanged) = 'showColor($event)'>change me</h2>
    <h2  appMynewcolor color ="cyan" (OnColorChanged) = 'showColor($event)'>change me</h2>
    <h2  appMynewcolor color ="green" (OnColorChanged) = 'showColor($event)'>change me</h2>

  `,
  styles: []
})
export class ArrayComponent implements OnInit {
@Input()
cities;
show: boolean = true;
color:string;
  constructor() { }

  showColor(value){
    this.color = value;
    console.log(value)
  }
  ngOnInit() {
  }

}
