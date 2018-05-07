import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ItemClass } from '../ItemClass';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import 'rxjs/add/observable/timer';
import { MAT_DIALOG_DATA } from '@angular/material';




@Component({
  selector: 'shl-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  items: any = [];
  name: any;
  id: number;
  sub: any;



  constructor(public http: HttpClient, /* public route: ActivatedRoute, */ @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    console.log("HALLO");
    console.log(this.data);
    /* this.sub = this.route.params.subscribe(params => {
      this.id = params['id'] - 1;

    }); */

    this.items = this.getItems()
      .subscribe((dataStuff) => {
        console.log(this.data);
        this.items = dataStuff.items[this.data];

      });
  }

  getItems(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/items');

  }


}

export interface ItemIF {
  id: number;
  barcode: string;
  name: string;
  description?: string;
  type?: string;
  room?: string;
  status?: any;
  annotation?: string;
  image?: string;
  lend?: any;
  manufactor: string;
  created_at: string;
  updated_at: string;
}
