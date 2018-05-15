import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatInputModule, MatTableModule } from '@angular/material';
import { ItemFormComponent } from './item-form/item-form.component';

import { FormsModule, NgForm } from '@angular/forms';
import { ItemFormService } from './item-form.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { MatCardModule } from '@angular/material/card';

import { RouterModule, Routes } from '@angular/router';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';



const appRoutes: Routes = [
  { path: 'home', component: TableComponent },
  { path: 'form', component: ItemFormComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'items', children: [
      {
        path: 'list', component: TableComponent, children: [
          { path: 'detail/:id', component: ItemDetailComponent }
        ]
      }
    ]
  }

];


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ItemFormComponent,
    ItemDetailComponent,
    SignUpComponent,
    SigninComponent
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
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,

  ],
  providers: [
    ItemFormService,
    { provide: MAT_DIALOG_DATA, useValue: {}       },
  AuthService   ],
  bootstrap: [AppComponent],
})
export class AppModule { }
