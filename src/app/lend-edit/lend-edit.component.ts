import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { LendService } from '../lend.service';
import { MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '../../../node_modules/@angular/forms';
import { LendClass } from '../LendClass';

@Component({
  selector: 'shl-lend-edit',
  templateUrl: './lend-edit.component.html',
  styleUrls: ['./lend-edit.component.scss']
})
export class LendEditComponent implements OnInit {
  private id;
  private lends;
  private lend;

  public personid: string;
  public startdate: string;
  public enddate: string;
  public annotation: string;
  private lendSummary: LendClass = new LendClass();

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  constructor(
    private lendService: LendService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.load(this.id);
  }

  async load(value) {
    const values = await this.http
      .get<any>('http://127.0.0.1:8000/api/lend/' + this.id)
      .toPromise();

    this.lends = values[0];
    // debugger;
    console.log(this.lends);
  }

  onChangeData(form: NgForm) {
    console.log(form);
    this.lendSummary.personid = form.value.personid;
    this.lendSummary.startdate = form.value.startdate;
    this.lendSummary.enddate = form.value.enddate;
    this.lendSummary.annotation = form.value.annotation;
    this.lendSummary.id = this.id;

    this.lendService.putLend(this.lendSummary);
  }
}
