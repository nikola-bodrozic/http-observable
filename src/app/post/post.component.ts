import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../get-data.service";
import { Observable } from 'rxjs/Observable';
    
@Component({
    selector: "nb-post",
    template: `
<input  (keyup.enter)="createActivity(title.value)" #title type="text"> {{ newId }} <br>
<table>
<tr>
  <th>id</th>
  <th>action</th>
</tr>
<tr *ngFor="let item of activities$ | async">
  <td>{{item.id}}</td>
  <td><button (click)="getActivity(item)">Show Activity</button></td>
</tr>
</table>

<table>
<tr>
  <th>id</th>
  <th>title</th>
</tr>
<tr *ngFor="let item of activity$ | async">
  <td> {{item.id}} </td>
  <td> {{item.title}} </td>
</tr>
</table>
  `
})
export class PostComponent implements OnInit {
    
    public activities$: Observable<any>;
    public activity$: Observable<any>;
    newId:string;
    constructor(private getDataServ: GetDataService) { }
    
    ngOnInit() {
        this.activities$ = this.getDataServ.getActivities();
    }

  createActivity(param: string) {
    let post = { title: param};
    this.getDataServ.createActivity(post)
    .subscribe( 
      response => { 
        post['id'] = response.json().id; 
        this.newId = post['id']; 
      }  );
  }    
  
  getActivity(param: any) {
    this.activity$ = this.getDataServ.getActivity(param.id);

  }  

  showActivity(param:any){
    alert(param.id + " " + param.title);
  }
}