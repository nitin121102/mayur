import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  links = ['All', 'Videos', 'Images' , 'Podcast' , 'KTA'];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
  }

}
