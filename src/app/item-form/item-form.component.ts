import { Component, OnInit } from '@angular/core';
import { Item } from '../IFitem';
import { ItemFormService } from '../item-form.service';
import { ItemClass } from '../ItemClass';




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

  constructor(public itemFormService: ItemFormService) {

  }

  ngOnInit() {


  }

  onSubmit() {
    console.log('onSubmit in Item Form Component');
    this.item.barcode = this.barcode;
    this.item.name = this.name;
    this.item.description = this.description;

    console.log(this.item);
    this.itemFormService.addItem(this.item);
  }

}
