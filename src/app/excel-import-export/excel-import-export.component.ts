import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ItemFormService } from '../item-form.service';

import { ToastsManager } from '../../../node_modules/ng2-toastr';

@Component({
  selector: 'shl-excel-import-export',
  templateUrl: './excel-import-export.component.html',
  styleUrls: ['./excel-import-export.component.scss']
})
export class ExcelImportExportComponent implements OnInit {
  selectedFile: File = null;

  constructor(
    private itemFormService: ItemFormService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  async onUploadWithFileName() {


    await this.itemFormService.onUploadWithFileName(this.selectedFile);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('SUCCESS: Exel imported!', 'Success!');
  }
}
