import { Directive, Input,Output, HostListener, ElementRef, Renderer2, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
  @Input()
  color:string;
  @Output()
  OnColorChanged: EventEmitter<string>;
  constructor(private e:ElementRef, r:Renderer2) {
    this.OnColorChanged = new EventEmitter();
   }
  @HostListener('click') foo() {
     this.e.nativeElement.style.color = this.color;
     this.emitColor();
     console.log("fired")
      return;
     }
  emitColor(){
    this.OnColorChanged.emit(this.color);
  }
ngOnInint(){
  console.log(this.color);
}
}
