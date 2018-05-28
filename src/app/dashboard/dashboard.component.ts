import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { PersonDto } from '../user-list/user-list.component';

@Component({
  selector: 'shl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userClaims: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((data: any) => {
      this.userClaims = data.persons;
      this.userService.user = data.persons;
      console.log(data.persons);
    });

  }

  onLogOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
