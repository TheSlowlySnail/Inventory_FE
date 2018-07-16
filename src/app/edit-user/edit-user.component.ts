import { Component, OnInit, Input, OnDestroy, Inject, ViewContainerRef } from '@angular/core';
import { UserService } from '../user.service';
import { PersonModel, PersonDto } from '../user-list/user-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { ToastsManager } from '../../../node_modules/ng2-toastr';

@Component({
  selector: 'shl-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  public personEditModell: PersonModel;
  // public username: string;
  private personid: number;
  private temppersonid: number;
  public email: string;
  public role: string;
  public password: string;
  public c_password: string;
  public firstname: string;
  public lastname: string;
  public annotation: string;

  @Input() public userJson: IPersonArray;
  user: Person = new Person();

  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  public subscribtions = [];
  test;
  ngOnInit() {
    if (this.data.compId != null) {
      this.temppersonid = this.data.compId;
    } else {
      this.temppersonid = Number(this.router.snapshot.paramMap.get('id'));
    }

    /* this.subscribtions.push(
      this.router.params.subscribe((params: Params) => {
        this.loadPerson(this.userService.user.id);
      })
    ); */
    this.loadPerson(this.temppersonid);
  }
  ngOnDestroy(): void {
    this.subscribtions.map(s => s.unsubscribe());
  }

  async loadPerson(personId: number) {
    try {
      const val: any = await this.http
        .get('http://127.0.0.1:8000/api/user/' + personId)
        .toPromise();
      this.user = val.persons;
      console.log(val);
      console.log(personId);
    } catch (err) {
      console.log(err);
    }
  }

  onChangeData(form: NgForm) {
    this.email = form.value.email;

    this.personid = form.value.personid;
    this.role = form.value.role;

    this.firstname = form.value.firstname;
    this.lastname = form.value.lastname;
    this.annotation = form.value.annotation;

    this.userService
      .editUser(
        this.temppersonid,
        this.personid,
        this.email,
        this.firstname,
        this.lastname,
        this.role
      )
      .subscribe(
        respone => {
         this.showSuccess();
        },
        err => this.showError()
      );
  }

  showSuccess() {
    this.toastr.success('SUCCESS: User edit!', 'Success!');
  }

  showError() {
    this.toastr.error(
      'ERROR: Look into console!',
      'Oops!'
    );
  }
}
export class Person {
  id: number;
  name: string;
  personid: string;
  email: string;
  firstname: string;
  lastname: string;
  role: string;
  annotation: string;
  created_at: string;
  updated_at: string;
  password: string;
}

export interface IPersonArray {
  persons: Person[];
}
