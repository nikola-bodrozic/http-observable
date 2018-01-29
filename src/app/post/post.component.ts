import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../get-data.service";
import { Observable } from 'rxjs/Observable';
    
@Component({
    selector: "nb-post",
    template: `
<div *ngFor="let item of activities$ | async">{{ item.body.foo }}</div>
  `
})
export class PostComponent implements OnInit {
    
    public activities$: Observable<any>;
    
    constructor(private getDataServ: GetDataService) { }
    
    ngOnInit() {
        this.activities$ = this.getDataServ.getActivities();
    }
}