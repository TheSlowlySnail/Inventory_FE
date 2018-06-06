import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ItemFormService } from '../item-form.service';

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
    private itemFormService: ItemFormService
  ) {}
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
  public description: string;
  public selectedFile: File = null;

  public item: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    debugger;
    console.log(this.id);
    this.item = this.loadItem(this.id);
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

  onChangeData(form: NgForm) {
    console.log(form);

    this.barcode = form.value.barcode;
    console.log(this.barcode);
    this.name = form.value.name;
    //  this.personEditModell.role = form.valid.role;
    this.room = form.value.room;
    this.description = form.value.description;
    this.status = form.value.status;
    this.annotation = form.value.annotation;

    if (this.selectedFile) {
      this.image =
        'http://localhost:8000/images/' + this.selectedFile.name;


    }
    this.itemService.editItem(
      this.id,
      this.barcode,
      this.name,
      this.description,
      this.type,
      this.room,
      this.status,
      this.annotation,
      this.image
    );

  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.itemFormService.onUpload(this.selectedFile);
    console.log(this.selectedFile.name);

  }
}
