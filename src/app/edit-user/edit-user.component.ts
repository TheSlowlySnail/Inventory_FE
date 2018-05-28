import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'shl-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public username: string;
  private personid: string;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;
  public annotation: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onChangeData() {
    this.userService.editUser(1, this.personid, this.email, this.firstname, this.lastname, this.role, this.password, this.annotation);
  }

}
