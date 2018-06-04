import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shl-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  constructor(private itemService: ItemService, private http: HttpClient, private route: ActivatedRoute) {}
  public id: number;
  public barcode: string;
  public name: string;
  public type: string;
  public room: string;
  public status: string;
  public annotation: string;
  public image: string;
  public lend: string;
  public manufactor: string;

  public item: any;

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    debugger
    console.log(this.id);
  }

  async loadItem(id: number) {
    try {
      let val: any = await this.http
        .get('http://127.0.0.1:8000/api/item/' + id)
        .toPromise();
      this.item = val.items;
    } catch (err) {
      console.log(err);
    }
  }
}
