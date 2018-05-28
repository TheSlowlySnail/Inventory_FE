import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatInputModule, MatTableModule, MatTableDataSource, MatSort, MatDialog } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { UserClass } from '../UserClass';
@Component({
  selector: 'shl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserClass = [];
  displayedColumns = ['email', 'name', 'firstname', 'lastname', 'role', 'edit', 'delete'];
  dataSource: any = [];
  @ViewChild(MatSort) sort: MatSort;
  subscription = [];

  constructor(public http: HttpClient, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = <UserClass>data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.users.persons);
        console.log(this.dataSource);
      }
    );
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

  delete(id) {

    this.userService.deleteUser(id).subscribe((data) => console.log(data));
  }



}
