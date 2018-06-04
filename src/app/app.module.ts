import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbar,
  MatToolbarModule
} from '@angular/material';
import { MatInputModule, MatTableModule } from '@angular/material';
import { ItemFormComponent } from './item-form/item-form.component';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ItemFormService } from './item-form.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { MatCardModule } from '@angular/material/card';

import { RouterModule, Routes } from '@angular/router';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserService } from './user.service';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserClass } from './UserClass';
import { ItemService } from './item.service';

const appRoutes: Routes = [
  { path: 'home', component: TableComponent },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'edituser/:id', component: EditUserComponent },
      {
        path: 'items',
        children: [
          {
            path: '',
            component: TableComponent,
            children: [{ path: 'detail/:id', component: ItemDetailComponent }]
          }
        ]
      }
    ]
  },
  { path: 'form', component: ItemFormComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'item', component: ItemFormComponent },
  { path: 'edititem/:id', component: ItemEditComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ItemFormComponent,
    ItemDetailComponent,
    SignUpComponent,
    SigninComponent,
    DashboardComponent,
    EditUserComponent,
    ItemEditComponent,
    UserListComponent,

    UserCreateComponent
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

    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemFormService,
    UserService,
    EditUserComponent,
    ItemService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
