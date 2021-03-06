import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './edit-user/edit-user.component';
import { PersonDto } from './user-list/user-list.component';

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

  }

  getUser(id: number) {
    return this.http.get(this.rootUrl + '/user/' + id);
  }
  getUsers() {
    return this.http.get(this.rootUrl + '/users');
  }

  // Nur mit Token erreichbar, deswegen POST
  getUserDetail() {
    this.httpOptions = {
      headers: new HttpHeaders({
        /* 'Content-Type': 'application/json', */
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/json'
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      })
    };

    return this.http
      .post(this.rootUrl + '/userDetails', null, this.httpOptions)
      .subscribe(data => {
        this.user = data;
        console.log(data);
      });
  }

  editUser(
    tempid: number,
    id: number,
    email: string,
    firstname: string,
    lastname: string,
    role: string,
    annotation?: string
  ) {
    return this.http
      .put(
        'http://127.0.0.1:8000/api/user/' + tempid,
        {
          personid: id,
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: role,
          annotation: annotation
        },
        this.httpOptions
      );
  }

  deleteUser(id) {
    return this.http.delete('http://127.0.0.1:8000/api/user/' + id);
  }
}
