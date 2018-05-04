import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatInputModule, MatTableModule, MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'shl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(public http: HttpClient) { }

  items: any = [];
  displayedColumns = ['barcode', 'name', 'link'];
  dataSource: any = [];
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
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





}


