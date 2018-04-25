import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'shl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public http: HttpClient) { }
  items: any;
  ngOnInit() {
    this.items = this.getItems().subscribe((data) => {
         this.items = data;
         console.log(data);
        });
    console.log(this.items);
  }

   getItems() {
    return  this.http.get('http://127.0.0.1:8000/api/items');

  }

}
