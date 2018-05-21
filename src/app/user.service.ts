import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  rootUrl = 'http://127.0.0.1:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      // 'X-Requested-With': 'XMLHttpRequest',
      // 'Content-Type': 'application/json'
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    })
  };

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.post(this.rootUrl + '/userDetails', null, this.httpOptions);
  }

}
