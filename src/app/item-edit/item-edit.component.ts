import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shl-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  constructor() { }
  public username: string;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;


  ngOnInit() {
  }

  onSignup() {
    // this.authService.signup(this.username, this.email, this.firstname, this.lastname, this.role, this.password, this.c_password);
  }

}
