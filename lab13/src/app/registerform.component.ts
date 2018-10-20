import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registerform',
  template: `
  
   <input [(ngModel)]='message'>{{message}}
    
  `,
  styles: [`
  input.ng-touched.ng-invalid{
    border:1px solid red;
  }`]
})
export class RegisterformComponent implements OnInit {
@ViewChild('f')form;
 type:string[] =['basic','advanced','pro'];
 message = 'bishwa';
 defaultValue = this.type[0];
  constructor() { 
    let type =['basic','advanced','pro'];
  }
  logForm(){
    console.log(this.form);
  }

  ngOnInit() {
  }

}
