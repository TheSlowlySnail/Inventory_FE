import { Component, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'shl-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.scss']
})
export class LendComponent {
  constructor(private itemService: ItemService, private http: HttpClient) {}
  private items: {
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

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  async load(value) {
    const values = await this.http
      .get<any>('http://127.0.0.1:8000/api/items')
      .toPromise();

    this.items = values.items.find(i => i.id == value.compId);
  }
}
