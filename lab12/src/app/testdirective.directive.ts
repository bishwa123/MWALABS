import { Directive, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {
  @Input('shadow') defaultShadow = '1px 1px 1px 5px grey'
  constructor(private e: ElementRef, private r :Renderer2) {
    r.setStyle(e.nativeElement, "font-size","30px");
    //this.myShadow = this.defaultShadow;
   }
   @HostBinding('style.box-shadow') myShadow;

   ngOnInit() { // reached after all bound properties are initilized
   setTimeout(()=>this.myShadow = this.defaultShadow,1000);
  }
}
