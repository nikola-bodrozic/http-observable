import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'nb-post',
  template: `
<ul class="list-group">
  <li *ngFor="let post of posts" class="list-group-item">
    {{ post.title }}
  </li>
</ul>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  posts: any[];
  constructor(http: Http) { 
    http
    .get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(resp => this.posts = resp.json());
  }

  ngOnInit() {
  }

}
