import { Component, OnInit } from '@angular/core';
import { ItemFormService } from '../item-form.service';

@Component({
  selector: 'shl-excel-import-export',
  templateUrl: './excel-import-export.component.html',
  styleUrls: ['./excel-import-export.component.scss']
})
export class ExcelImportExportComponent implements OnInit {
  selectedFile: File = null;

  constructor(private itemFormService: ItemFormService) {}

  ngOnInit() {}

  async onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    await this.itemFormService.onUpload(this.selectedFile);

  }
}
