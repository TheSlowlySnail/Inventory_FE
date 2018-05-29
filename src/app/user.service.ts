import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './edit-user/edit-user.component';

@Injectable()
export class UserService {
  public user: any;

  rootUrl = 'http://127.0.0.1:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      // 'X-Requested-With': 'XMLHttpRequest',
       'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('userToken')}`
    })
  };

  constructor(private http: HttpClient) {
    console.log(localStorage.getItem('userToken'));
  }

  getUser(id: number) {
    return this.http.get(this.rootUrl + '/user/' + id);
  }
  getUsers() {

    return this.http.get(this.rootUrl + '/users');
  }

  // Nur mit Token erreichbar, deswegen POST
  getUserDetail() {
    this.httpOptions = { headers: new HttpHeaders({
        /* 'Content-Type': 'application/json', */
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/json'
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }) };
    console.log('getUserDetail');
    console.log(localStorage.getItem('userToken'));
    console.log('HTTP OPTION');
    console.log(this.httpOptions);
    return this.http.post(
      this.rootUrl + '/userDetails',
      null,
      this.httpOptions
    );

  }

  editUser(
    id: number,
    personid: string,
    email: string,
    firstname: string,
    lastname: string,
    role: string = 'user',
    annotation: string
  ) {
    return this.http
      .put(
        'http://127.0.0.1:8000/api/user/' + id,
        {
          personid: personid,
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: role,
          annotation: annotation
        },
        this.httpOptions
      )
      .subscribe(
        respone => {
          console.log(respone);
        },
        err => console.log(err)
      );
  }

  deleteUser(id) {
    return this.http.delete('http://127.0.0.1:8000/api/user/' + id);
  }
}
