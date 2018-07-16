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

  private items: {
    annotation: string;
    barcode: string;
    created_at: string;
    description: string;
    id: string;
    image: string;
    lend: string;
    manufactor: string;
    name: string;
    room: string;
    status: string;
    type: string;
  };

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
    // this.itemService.editItem(
    //   Number( this.items.id),
    //    this.items.barcode,
    //    this.items.name,
    //    this.items.description,
    //    this.items.type,
    //    this.items.room,
    //    'back',
    //    this.items.annotation
    //  );
    return this.http
      .delete('http://127.0.0.1:8000/api/lend/' + id)
      .subscribe(data => console.log(data));
  }
}
