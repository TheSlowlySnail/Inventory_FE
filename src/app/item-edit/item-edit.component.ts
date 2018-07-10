import { Component, OnInit, Inject } from '@angular/core';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemFormService } from '../item-form.service';
import { MatDatepicker, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'shl-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private itemFormService: ItemFormService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.load(this.data);
  }
  public id: number;
  public barcode: string;
  public name: string;
  public type: string;
  public room: string;
  public status: string;
  public annotation: string;
  public image: string;
  public lend: number;
  public manufactor: string;
  public description: string;
  public selectedFile: File = null;

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

  public item: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    console.log(this.id);
    // this.item = this.loadItem(this.id);
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

  async load(value) {
    const values = await this.http
      .get<any>('http://127.0.0.1:8000/api/items')
      .toPromise();
      this.id = value.compId;

    this.items = values.items.find(i => i.id === value.compId);
    console.log(this.items.id);
  }

  onChangeData(form: NgForm) {
    console.log('komm ich hier rein?');
    console.log(form);

    this.barcode = form.value.barcode;
    console.log(this.barcode);
    this.name = form.value.name;
    //  this.personEditModell.role = form.valid.role;
    this.room = form.value.room;
    this.description = form.value.description;
    this.status = form.value.status;
    this.annotation = form.value.annotation;
    this.lend = form.value.lend;
    this.manufactor = form.value.manufactor;

    if (this.selectedFile) {
      this.image = 'http://localhost:8000/images/' + this.selectedFile.name;
    }
    console.log(this.id);


    this.itemService.editItem(
      this.id,
      this.barcode,
      this.name,
      this.description,
      this.type,
      this.room,
      this.status,
      this.annotation,
      this.image,
      this.lend,
      this.manufactor,
    );
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.itemFormService.onUpload(this.selectedFile);
    console.log(this.selectedFile.name);
  }
}
