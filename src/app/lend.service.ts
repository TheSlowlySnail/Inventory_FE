import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LendService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  addLend(lend: any) {
    return this.http
      .post('http://127.0.0.1:8000/api/lend', lend, this.httpOptions)
      .subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
  }

  putLend(lend: any) {
    console.log(lend);
    return this.http
      .put('http://127.0.0.1:8000/api/lend/' + lend.id , lend, this.httpOptions)
      .subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
  }

  getLendsOfUser(personId) {
    console.log('http://127.0.0.1:8000/api/pidlends?pid=' + personId);
    return this.http.get('http://127.0.0.1:8000/api/pidlends?pid=' + personId);
  }

  getLendsOfAllUser() {

    return this.http.get('http://127.0.0.1:8000/api/lends');
  }
}
