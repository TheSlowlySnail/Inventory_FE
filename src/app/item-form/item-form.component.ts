import { Component, OnInit } from '@angular/core';
import { Item } from '../IFitem';
import { ItemFormService } from '../item-form.service';
import { ItemClass } from '../ItemClass';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'shl-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  public item: ItemClass = new ItemClass();
  public barcode: string;
  public name: string;
  public description: string;
  public type: string;
  public room: string;
  public annotation: string;
  public manufactor: string;
  selectedFile: File = null;

  constructor(public itemFormService: ItemFormService) {}

  ngOnInit() {}

  onSubmit() {
    console.log('onSubmit in Item Form Component');
    this.item.barcode = this.barcode;
    this.item.name = this.name;
    this.item.description = this.description;
    this.item.type = this.type;
    this.item.room = this.room;
    this.item.annotation = this.annotation;
    this.item.manufactor = this.manufactor;
    if (this.selectedFile) {
      this.item.image =
        'http://localhost:8000/images/' + this.selectedFile.name;
    }

    console.log(this.item);
    this.itemFormService.addItem(this.item);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.itemFormService.onUpload(this.selectedFile);
  }

  uploadImage(event) {}
}
