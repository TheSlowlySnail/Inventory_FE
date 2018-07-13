import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {
  MatInputModule,
  MatTableModule,
  MatTableDataSource,
  MatSort,
  MatDialog
} from '@angular/material';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemFormService } from '../item-form.service';
import { Subscription } from 'rxjs/Subscription';
import { LendComponent } from '../lend/lend.component';
import { ItemEditComponent } from '../item-edit/item-edit.component';
import { UserService } from '../user.service';

@Component({
  selector: 'shl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  constructor(
    public http: HttpClient,
    public dialog: MatDialog,
    private itemFormService: ItemFormService,
    private userService: UserService
  ) {}

  items: any = [];

  displayedColumns = [
    'barcode',
    'name',
    'type',
    'room',
    'status',
    'dialog',
    'edit',
    'lend'
  ];
  dataSource: any = [];
  @ViewChild(MatSort) sort: MatSort;
  subscription = [];

  ngOnInit() {
    if (this.userService.user.persons.role === 'User') {

      this.displayedColumns = [
        'barcode',
        'name',
        'type',
        'room',
        'status',
        'dialog'
      ];
    }
    this.load();
    this.subscription.push(
      this.itemFormService.itemWasPosted.subscribe(() => {
        this.load();
      })
    );

    this.dataSource.sort = this.sort;
  }

  load() {
    this.items = this.getItems().subscribe(data => {
      this.items = data;
      this.dataSource = new MatTableDataSource(this.items.items);
      console.log(this.dataSource.data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getItems() {
    return this.http.get('http://127.0.0.1:8000/api/items');
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

  openDialog(id) {
    this.dialog.open(ItemDetailComponent, {
      data: {
        compId: id
      }
    });
  }

  openItemEditDialog(id) {
    this.dialog.open(ItemEditComponent, {
      data: {
        compId: id
      }
    });
  }

  openLendDialog(id) {

    this.dialog.open(LendComponent, {
      data: {
        compId: id
      }
    });
  }
}
