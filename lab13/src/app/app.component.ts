import { Component,OnInit } from '@angular/core';

import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  data:any;
  constructor(private postService: PostService){
    this.data = this.postService.getPosts();
    console.log(this.data);
  }
  ngOnInit(){

  }


}
