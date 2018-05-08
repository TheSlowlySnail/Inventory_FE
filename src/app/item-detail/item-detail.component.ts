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

    this.load(this.data);
    /* this.sub = this.route.params.subscribe(params => {
      this.id = params['id'] - 1;

    }); */

    // this.items = this.getItems(this.data)
    //   .subscribe((dataStuff) => {
    //     console.log(this.data);
    //     debugger
    //     this.items = dataStuff.items[this.data];

    //   });
  }

  async load(value) {
    console.log(value);

    let values = await this.http.get('http://127.0.0.1:8000/api/items').toPromise();
    debugger
    this.items = values.items.find(i => i.id == value.compId);
    debugger

    //this.items.image = "bild.jpg";
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
