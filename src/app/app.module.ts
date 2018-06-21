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
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
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
import { ItemService } from './item.service';
import { LendComponent } from './lend/lend.component';
import { LendService } from './lend.service';
import { MomentModule } from 'ngx-moment';

import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import { LendOverviewComponent } from './lend-overview/lend-overview.component';
import { LendsOverviewAllComponent } from './lends-overview-all/lends-overview-all.component';
import { ExcelImportExportComponent } from './excel-import-export/excel-import-export.component';

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
  { path: 'lend', component: LendComponent },
  { path: 'lendpid', component: LendOverviewComponent },
  { path: 'lends', component: LendsOverviewAllComponent },
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

    UserCreateComponent,

    LendComponent,

    LendOverviewComponent,

    LendsOverviewAllComponent,

    ExcelImportExportComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatToolbarModule,

    MomentModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemFormService,
    UserService,
    EditUserComponent,
    ItemService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    LendService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
