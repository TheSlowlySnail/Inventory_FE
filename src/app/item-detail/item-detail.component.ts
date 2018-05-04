import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shl-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  items: any = [];
  name: any = 'Hallo Welt';
  id: number;
  sub: any;



  constructor(public http: HttpClient, public route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'] - 1;

    });

    this.items = this.getItems().subscribe((data) => {
      this.items = data.items[this.id];
      //console.log(this.id);

      console.log(this.items);
    });
  }

  getItems() {
    return this.http.get('http://127.0.0.1:8000/api/items');

  }


}
