import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
      .post('http://127.0.0.1:8000/api/item', lend, this.httpOptions)
      .subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
  }
}
