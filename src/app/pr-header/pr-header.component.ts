import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pr-header',
  templateUrl: './pr-header.component.html',
  styleUrls: ['./pr-header.component.css']
})
export class PrHeaderComponent implements OnInit {
  login: boolean = false;
  user: any;
  name: any;
  id:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.login = true;
      this.name = this.user.username;
      this.id = this.user.medico_id;
      console.log(this.name);
    } else {
      this.login = false;
    }
  }

  logout() {
    console.log('this is fosdksjdvsvs', localStorage.getItem('currentUser'));
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
