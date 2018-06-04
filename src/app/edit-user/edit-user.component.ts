import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { PersonModel, PersonDto } from '../user-list/user-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'shl-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  public personEditModell: PersonModel;
  // public username: string;
  private personid: string;
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
    private http: HttpClient
  ) {}
  public subscribtions = [];
  test;
  ngOnInit() {
    this.subscribtions.push(
      this.router.params.subscribe((params: Params) => {
        this.loadPerson(this.userService.user.id);
      })
    );
    console.log(this.userJson);
  }
  ngOnDestroy(): void {
    this.subscribtions.map(s => s.unsubscribe());
  }

  async loadPerson(personId: number) {
    try {
      let val: any = await this.http
        .get('http://127.0.0.1:8000/api/user/' + personId)
        .toPromise();
      this.user = val.persons;
    } catch (err) {
      console.log(err);
    }
  }

  onChangeData(form: NgForm) {
    console.log(form);

    // FIXME: User ID sollte ich mir vom Service holen können, der Rest muss aus dem Formular kommen.
    // this.personEditModell.email = this.email;
    // this.personEditModell.personid = this.personid;
    // this.personEditModell.role = this.role;
    // this.personEditModell.firstname = this.firstname;
    // this.personEditModell.lastname = this.lastname;
    // this.personEditModell.annotation = this.annotation;

    // this.userService.editUser(this.userService.user.id, this.personEditModell);
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
