import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LendService } from '../lend.service';
import { UserService } from '../user.service';

@Component({
  selector: 'shl-lends-overview-all',
  templateUrl: './lends-overview-all.component.html',
  styleUrls: ['./lends-overview-all.component.scss']
})
export class LendsOverviewAllComponent implements OnInit {


  item: any = [];
  displayedColumns = [
    'barcode',
    'itemName',
    'startDate',
    'endDate',
    'details',
    'edit',
    'personname'
  ];
  dataSource: any = [];

  subscription = [];

  constructor(
    private http: HttpClient,
    private lendService: LendService,
    private userService: UserService
  ) { }

  user: any;
  ngOnInit() {
    this.getUserLends();
    this.userService.getUserDetail();
  }

  async getUserLends() {

    await this.lendService
      .getLendsOfAllUser()
      .subscribe(data => {
        this.dataSource = data;
        console.log(this.dataSource);
      });
  }

}
