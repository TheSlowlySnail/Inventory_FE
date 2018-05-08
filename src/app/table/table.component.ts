import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatInputModule, MatTableModule, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ItemFormService } from '../item-form.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'shl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(public http: HttpClient, public dialog: MatDialog, private itemFormService: ItemFormService) { }

  items: any = [];
  displayedColumns = ['barcode', 'name', 'link', 'dialog'];
  dataSource: any = [];
  @ViewChild(MatSort) sort: MatSort;
  subscription= [];

  ngOnInit() {
    this.load();
    this.subscription.push(
      this.itemFormService.itemWasPosted.subscribe(() => {debugger;this.load();})
    );
  }

  load() {
    this.items = this.getItems()
      .subscribe((data) => {
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





}


