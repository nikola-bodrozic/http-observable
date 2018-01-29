import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
    
@Injectable()
export class GetDataService {
    /*
  JSON file sent by server
{  
  "files":[
    {
      "id": 1,
      "title": "sunt aut",
      "body": {"foo":"bar"}
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": {"foo":"ton"}
    }
  ]  
}
    */
    constructor(
        private http: Http
    ) {}
    
    public getActivities(): Observable<any> {
        return this.http.get('http://localhost/i2.php')
            .map(res => res.json()['files'])
    }
}
