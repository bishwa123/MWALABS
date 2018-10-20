import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  template: `
    <form [formGroup] ='signUpForm' (ngSubmit)='onSubmit()'>
      Username: <input formControlName='username'>
      <span *ngIf="!signUpForm.get('username').valid && signUpForm.get('username').touched">Please enter valid username</span>
      Email: <input formControlName='email'>
      Password: <input formControlName='password'>
      <button type='submit'>Submit</button>
    </form>
  `,
  styles: []
})
export class ReactiveformComponent implements OnInit {
  signUpForm:FormGroup;
  constructor() { }
  onSubmit(){
    //console.log(this.signUpForm);
    console.log(this.signUpForm.valid);
  }
  ngOnInit() {
    this.signUpForm = new FormGroup({
        'username': new FormControl(null,Validators.required),
        "email": new FormControl(null,[Validators.required, Validators.email]),
          "password":new FormControl(null, [Validators.required])
    });
  }

}
