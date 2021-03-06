import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LendService } from '../lend.service';
import { UserService } from '../user.service';
import { MomentModule } from 'ngx-moment';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'shl-lend-overview',
  templateUrl: './lend-overview.component.html',
  styleUrls: ['./lend-overview.component.scss']
})
export class LendOverviewComponent implements OnInit {
  item: any = [];
  displayedColumns = [
    'barcode',
    'itemName',
    'startDate',
    'endDate',
    'details',
    'edit'
  ];
  dataSource: any = [];

  subscription = [];

  constructor(
    private http: HttpClient,
    private lendService: LendService,
    private userService: UserService
  ) {}

  user: any;
  ngOnInit() {
    this.getUserLends();
    this.userService.getUserDetail();
  }

   getUserLends() {
    this.dataSource = this.userService.user;
     console.log(this.userService.user);

     this.lendService
      .getLendsOfUser(this.userService.user.persons.personid)
      .subscribe(data => {
        this.dataSource = data;
        console.log(this.dataSource);
      });
  }
}
