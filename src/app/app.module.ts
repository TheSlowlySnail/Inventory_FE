import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatInputModule,  MatTableModule } from '@angular/material';
import { ItemFormComponent } from './item-form/item-form.component';

import { FormsModule } from '@angular/forms';
import { ItemFormService } from './item-form.service';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule

  ],
  providers: [ItemFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
