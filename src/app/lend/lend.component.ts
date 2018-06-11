import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { MatDatepicker, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { LendClass } from '../LendClass';
import { LendService } from '../lend.service';

@Component({
  selector: 'shl-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.scss']
})
export class LendComponent implements OnInit {
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

  private lend: LendClass = new LendClass();
  private personid: string;

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  ngOnInit(): void {
    this.load(this.data);
  }
  constructor(
    private itemService: ItemService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lendService: LendService
  ) {}

  async load(value) {
    const values = await this.http
      .get<any>('http://127.0.0.1:8000/api/items')
      .toPromise();

    this.items = values.items.find(i => i.id == value.compId);
    console.log(this.items.id);
  }

  onChangeData(form: NgForm) {
    console.log(this.datepicker._selected);
    console.log(form.value.studentid);
    this.lend.personid = form.value.studentid;
    // this.lend.personid = form.value.studentid;
    this.lend.annotation = form.value.annotation;
    this.lend.startDate = form.value.startdate;
    this.lend.endDate = form.value.enddate;

      this.lendService.addLend(this.lend);
  }


}
