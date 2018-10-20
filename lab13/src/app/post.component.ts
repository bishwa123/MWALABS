import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  template: `
    <p>
      post works!
    </p>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor(private postComponent: PostService) { }

  ngOnInit() {
  }

}
