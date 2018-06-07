import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    public http: HttpClient,
     @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
    let values = await this.http
      .get<any>('http://127.0.0.1:8000/api/items')
      .toPromise();

    this.items = values.items.find(i => i.id == value.compId);

    // this.items.image = "bild.jpg";
  }
}
export class Item {
  constructor() {}
  items: {
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
}

// calss ItemIF {
//   constructor(){}
//   id: number;
//   barcode: string;
//   name: string;
//   description?: string;
//   type?: string;
//   room ? : string;
//   status ? : any;
//   annotation ? : string;
//   image ? : string;
//   lend ? : any;
//   manufactor: string;
//   created_at: string;
//   updated_at: string;
// }
