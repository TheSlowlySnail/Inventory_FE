import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { _do } from 'rxjs/operator/do';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { ISubscription } from 'rxjs/Subscription';
@Injectable()
export class AuthService implements OnDestroy {
  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      // 'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    })
  };
  subscribe: ISubscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  signup(
    studentid: string,
    email: string,
    firstname: string,
    lastname: string,
    role: string = 'user',
    password: string,
    c_password: string
  ) {
    return this.http.post(
      'http://127.0.0.1:8000/api/userRegister',
      {
        studentid: studentid,
        email: email,
        firstname: firstname,
        lastname: lastname,
        role: role,
        password: password,
        c_password: c_password
      },
      this.httpOptions
    );
  }

  signupSubscribe(
    studentid: string,
    email: string,
    firstname: string,
    lastname: string,
    role: string = 'user',
    password: string,
    c_password: string
  ) {
    this.subscribe = this.signup(
      studentid,
      email,
      firstname,
      lastname,
      role,
      password,
      c_password
    ).subscribe(
      respone => {
        console.log(respone);
      },
      err => console.log(err)
    );
  }

  login(email: string, password: string) {
    return (
      this.http
        .post(
          'http://127.0.0.1:8000/api/userLogin',
          { email: email, password: password },
          this.httpOptions
        )
        // this is just the HTTP call,
        // we still need to handle the reception of the token
        .shareReplay()
    );
  }
}

interface TokenJson {
  token: string;
}
