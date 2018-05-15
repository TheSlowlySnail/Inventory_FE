import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map} from 'rxjs/operators/map';
import { _do } from 'rxjs/operator/do';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class AuthService {


  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  signup(username: string, email: string, password: string, c_password: string) {
    return this.http.post('http://127.0.0.1:8000/api/userRegister', { name: username, email: email, password: password,
    c_password: c_password  },
      this.httpOptions).subscribe(
        respone => { console.log(respone); }
      );


  }

  signin(email: string, password: string) {
    return this.http.post<TokenJson>('http://127.0.0.1:8000/api/userLogin',
      { email: email, password: password },
    this.httpOptions);

  }



}

interface TokenJson {
  token: string;
}
