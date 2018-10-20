import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor() { }
  logMe(msg:string){
    console.log(msg);
  }
}
