import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'shl-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public studentid: string;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;


  ngOnInit() {
  }

  onSignup() {
    console.log('onSignUp');
    this.authService.signup(this.studentid, this.email, this.firstname, this.lastname, 'user', this.password, this.c_password, '');
  }

}
