import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-profile',
  templateUrl: './pr-profile.component.html',
  styleUrls: ['./pr-profile.component.css']
})
export class PrProfileComponent implements OnInit {

  user: any;
  name: any;
  email: any;
  gender: any;
  country: any;
  mobile: any;
  id: any;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.user.pr_team_id;
    this.name = this.user.username;
    this.email = this.user.email;
    this.gender = this.user.gender;
    this.country = this.user.country_code;
    this.mobile = this.user.mobile;
  }

}
