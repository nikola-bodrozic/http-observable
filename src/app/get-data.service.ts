import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
    
@Injectable()
export class GetDataService {

    constructor(
        private http: Http
    ) {}
    
    // GET request
    public getActivities(): Observable<any[]> {
        return this.http.get('http://localhost/i2.php')
            .map(res => res.json()['files']);
    }
    
    // GET request with id
    public getActivity(id: any): Observable<any> {
      return this.http.get('http://localhost/i3.php?id='+id)
          .map(res => res.json()['files']);
    }

    // POST request with JSON in HTTP body
    public createActivity(post) {
      return this.http.post('http://localhost/i2.php', JSON.stringify(post));
    }  
}
