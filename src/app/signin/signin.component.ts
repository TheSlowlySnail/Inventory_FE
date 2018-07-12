import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

import { TokenClass } from './TokenClass';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ISubscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';

@Component({
  selector: 'shl-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  public email: string;
  public password: string;
  isLoginError: boolean;

  public user: ISubscription;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.user.unsubscribe();
  }

   onSignIn() {
    this.user = this.authService.login(this.email, this.password).subscribe(
      async (resp: TokenClass) => {
        console.log(this.email);
        console.log(resp);
        await localStorage.setItem('userToken', resp.success.token);

        await this.userService.getUserDetail();
        console.log(this.userService.user);

        this.router.navigate(['/dash']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.isLoginError = true;
      }
    );
  }
}




