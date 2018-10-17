import { Directive, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  constructor( private e: ElementRef, r:Renderer2) {
    //r.setStyle(e.nativeElement,'display','show');

   }
   @Input()
    show:boolean;
   @HostBinding('style.display')display;
   ngOnInit() { // reached after all bound properties are initilized
    this.display = this.show?"inline-block":"none";
    console.log(this.show);
  }
}
