import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
      this.userClaims = data;
      console.log(data.success);
    });
  }

  onLogOut() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/signin']);
  }

}
