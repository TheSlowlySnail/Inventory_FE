import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './edit-user/edit-user.component';

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

  getUser(id: number) {
  debugger
    return this.http.get(this.rootUrl + '/user/' + id);
  }
  getUsers() {
    return this.http.get(this.rootUrl + '/users');

  }

  editUser(id: number, personid: string, email: string, firstname: string, lastname: string, role: string = 'user'
    , password: string, annotation: string) {

    return this.http.put('http://127.0.0.1:8000/api/user/' + id, {
      personid: personid, email: email, firstname: firstname, lastname: lastname,
      role: role, password: password, annotation: annotation
    },
      this.httpOptions).subscribe(
        respone => { console.log(respone); },
        err => console.log(err)
      );


  }

  deleteUser(id) {
    return this.http.delete('http://127.0.0.1:8000/api/user/' + id);
  }

}
