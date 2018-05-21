import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

import { TokenClass } from './TokenClass';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'shl-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public email: string;
  public password: string;
  isLoginError: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }



  onSignIn() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (resp: TokenClass) => {

          localStorage.setItem('userToken', resp.success.token);

          this.router.navigate(['/dash']);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.isLoginError = true;
        }
      );
  }

}




