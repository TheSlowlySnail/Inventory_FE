import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LendService } from '../lend.service';
import { UserService } from '../user.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'shl-lends-overview-all',
  templateUrl: './lends-overview-all.component.html',
  styleUrls: ['./lends-overview-all.component.scss']
})
export class LendsOverviewAllComponent implements OnInit {
  item: any = [];
  lend: any = [];
  displayedColumns = [
    'barcode',
    'itemName',
    'startDate',
    'endDate',
    'details',
    'edit',
    'personname',
    'delete'
  ];
  dataSource: any = [];

  subscription = [];

  constructor(
    private http: HttpClient,
    private lendService: LendService,
    private userService: UserService,
    private itemService: ItemService
  ) {}

  user: any;
  ngOnInit() {
    this.getUserLends();
    this.userService.getUserDetail();
  }

  async getUserLends() {
    await this.lendService.getLendsOfAllUser().subscribe(data => {
      this.dataSource = data;
      this.lend = data;
      console.log(this.dataSource);
    });
  }

  onLendDelete(id) {
    return this.http
      .delete('http://127.0.0.1:8000/api/lend/' + id)
      .subscribe(data => console.log(data));
  }
}
