import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

import { TokenClass } from './TokenClass';

@Component({
  selector: 'shl-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  public email: string;
  public password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.login(this.email, this.password)
    .subscribe(
      (resp: TokenClass) => {

        localStorage.setItem('userToken', resp.success.token);
      },
      (err: HttpErrorResponse) => console.log(err)
    );
  }

}




