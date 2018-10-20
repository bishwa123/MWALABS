import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  data:any;
  constructor(private http: HttpClient) { }
  getPosts(){
      this.data = this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
      return this.data;
  }
}
