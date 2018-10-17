import {Component, Output, Input, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
    selector:'counter-app',
    template: `
        <button (click) ='increaseValue();emitCounter()'>+</button>
        <p>{{counterValue}}</p>
        <button (click) = 'decreaseValue();emitCounter()'>-</button>
    `,
    styles:[`
    p{
        color:green;
    }`]
})
export class CounterComponent{
    @Input('counter')
    counterValue:number =0;
    
    @Output()
    onValueChanged: EventEmitter<number>;

    constructor(){
        this.onValueChanged = new EventEmitter();
    }

    emitCounter(){
        console.log(this.counterValue);
        this.onValueChanged.emit(this.counterValue);
    }

    increaseValue(){
        this.counterValue++;
    }
    decreaseValue(){
        if(this.counterValue >0)
        this.counterValue--;
    }
}