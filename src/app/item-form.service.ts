import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ItemFormService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addItem(item: any) {
    return this.http.post('http://127.0.0.1:8000/api/item', item, this.httpOptions).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }


  onUpload(selectedFile: File) {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    this.http.post('http://127.0.0.1:8000/api/store', fd)
    .subscribe(res => console.log(res));
  }

}
