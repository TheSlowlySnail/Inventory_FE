import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shl-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public username: string;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;

  constructor() { }

  ngOnInit() {
  }

}
