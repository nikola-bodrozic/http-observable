import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'nb-post',
  template: `
<ul class="list-group">
  <li *ngFor="let post of posts" class="list-group-item">
    {{ post['body'].foo }}
  </li>
</ul>
{{ post}}
  `,
  styles: []
})

/*
{
  "files":[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut",
      "body": {"foo":"bar"}
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": {"foo":"baz"}
    }
  ]
}
*/
export class PostComponent implements OnInit {

  posts: any[];
  constructor(http: Http) { 
    http
    .get('http://nikolabodr.com/i2.php')
    .subscribe(resp => {
      this.posts = resp.json()['files']
      console.log(JSON.stringify(this.posts[0]['body'].foo));    
      }
    );
  }
  ngOnInit() {
  }

}
