import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'shl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public http: HttpClient) { }
  items: any;
  displayedColumns = [ 'barcode', 'name'];
    dataSource: any;
  ngOnInit() {
    this.items = this.getItems().subscribe((data) => {
         this.items = data;
         this.dataSource = data;
         console.log(data);
        });
    console.log(this.items.items);


  }

   getItems() {
    return  this.http.get('http://127.0.0.1:8000/api/items');

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }





}
