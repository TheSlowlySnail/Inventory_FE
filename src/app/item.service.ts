import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '../../node_modules/@angular/compiler';

@Injectable()
export class ItemService {
  rootUrl = 'http://127.0.0.1:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      // 'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('http://127.0.0.1/api/items');
  }

  editItem(
    id: number,
    barcode: string,
    name: string,
    description: string,
    type: string,
    room: string = 'bath',
    status: string,
    annotation: string,
    image?: string,
    lend?: number,
    manufactor?: string
  ) {
    console.log('edit item' + id);
    return this.http
      .put(
        'http://127.0.0.1:8000/api/item/' + id,
        {
          barcode: barcode,
          name: name,
          description: description,
          type: type,
          room: room,
          status: status,
          annotation: annotation,
          image: image,
          lend: lend,
          manufactor: manufactor
        },
        this.httpOptions
      )
      .subscribe(
        respone => {
          console.log('Edit Item');
          console.log(respone);
        },
        err => console.log(err)
      );
  }

  changeStatusToBack(id) {

    return this.http
      .put(
        'http://127.0.0.1:8000/api/itemback/' + id, this.httpOptions
      )
      .subscribe(
        respone => {
          console.log('Edit Item');
          console.log(respone);
        },
        err => console.log(err)
      );
  }

  deleteItem(id) {
    return this.http
      .delete('http://127.0.0.1:8000/api/item/' + id)
      .subscribe(data => console.log(data));
  }

  createItem(
    barcode: string,
    name: string,
    description: string,
    type: string,
    room: string = 'bath',
    status: string,
    annotation: string,
    image: string,
    lend: number,
    manufactor: string
  ) {
    return this.http
      .post(
        'http://127.0.0.1:8000/api/item',
        {
          barcode: barcode,
          name: name,
          description: description,
          type: type,
          room: room,
          status: status,
          annotation: annotation,
          image: image,
          lend: lend,
          manufactor: manufactor
        },
        this.httpOptions
      )
      .subscribe(
        respone => {
          console.log(respone);
        },
        err => console.log(err)
      );
  }
}
