import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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
    this.authService.signin(this.email, this.password)
    .subscribe(
      resp => console.log(resp)
    );
  }

}
