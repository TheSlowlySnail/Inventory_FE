import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { ToastsManager } from '../../../node_modules/ng2-toastr';

@Component({
  selector: 'shl-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public toastr: ToastsManager,
    // vcr: ViewContainerRef
  ) {
    // this.toastr.setRootViewContainerRef(vcr);
  }
  public studentid: string;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;

  ngOnInit() {}

  onSignup() {
    console.log('onSignUp');
    this.authService
      .signup(
        this.studentid,
        this.email,
        this.firstname,
        this.lastname,
        this.role,
        this.password,
        this.c_password,
        ''
      )
      .subscribe(
        data => {
          this.showSuccess();
        },
        err => {
          this.showError();
        }
      );
  }

  showSuccess() {
    this.toastr.success('SUCCESS: User created!', 'Success!');
  }

  showError() {
    this.toastr.error(
      'ERROR: Its possible, there is an Users, with the same Person ID or email!',
      'Oops!'
    );
  }
}
