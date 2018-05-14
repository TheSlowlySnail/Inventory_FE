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
  public username: string;
  public email: string;
  public password: string;
  public c_password: string;


  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.authService.signup(this.username, this.email, this.password, this.c_password);
  }

}
