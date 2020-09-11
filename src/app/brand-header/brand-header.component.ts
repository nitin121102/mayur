import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.css']
})
export class BrandHeaderComponent implements OnInit {
  user: any;
  show: boolean;
  name: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.show=false;
    this.user = JSON.parse(localStorage.getItem('trd_brand'));
    // console.log('thiss again',this.user, this.user[0].id)
    if(this.user){
      this.show=true;
      this.name=this.user.f_name;
    }
  }

}
