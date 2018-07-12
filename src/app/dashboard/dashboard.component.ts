import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PersonDto } from '../user-list/user-list.component';
import {
  IPersonArray,
  EditUserComponent,
  Person
} from '../edit-user/edit-user.component';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'shl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userClaims: any;
  public subscribtion: ISubscription;
  constructor(
    private router: Router,
    private userService: UserService,
    private editUserComponent: EditUserComponent
  ) {}

  ngOnInit() {
    this.subscribtion = this.userService
      .getUserDetail();
      this.userClaims = this.userService.user;
      console.log(this.userClaims);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  onLogOut() {
    localStorage.removeItem('userToken');
    console.log('delete usertoken');
    console.log(localStorage.getItem('userToken'));
    this.router.navigate(['/signin']);
    this.editUserComponent.subscribtions = [];
    console.log(this.editUserComponent.subscribtions);
    this.userService.user = new Person();
  }
}
