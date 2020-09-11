import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";
import {UserserviceService} from '../userservice.service'
@Component({
  selector: 'app-editor-approval',
  templateUrl: './editor-approval.component.html',
  styleUrls: ['./editor-approval.component.css']
})
export class EditorApprovalComponent implements OnInit {

  model: any = {};
  urls: any = {};
  range=[];
  l:any;
  f_urls: any = {string:Array};
  f_names: any = {string:Array};
  id: any;
  user: any;
  content_details: any;
  data2: any;
  plan_data: any;
  limit: any;
details: any;
pay_stat: any;
plan_type: any;
count:any;
options: string[] = ['Accept', 'Rework'];
  constructor(private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.user.pr_team_id;
    this.get_details();
  }
  get_details() {
    this.userService.show_posts_submitted()
        .subscribe(
            data => {

      let data1 = data.json();
       this.data2 = data1['data'];
      this.pay_stat= data1['payment_status']
      console.log("araniiiiiun",data1);
      console.log("dataaaa",this.data2);
      this.limit = this.data2.length-1; 
      console.log(this.limit);   
      // if(this.pay_stat == true){
      //   this.userService.get_plan(id)
      //   .subscribe(
      //     data => {
      //       var plan_data = JSON.parse(data['_body']);
      //       this.plan_type= plan_data['data'][0]['plan_type'];
      //     }
      //   );
      // }
                     
    
            },
            error => {
                console.log(error);
            });
}
add_comment(){

}
createRange(number) {
  var items: number[] = [];
  for( var i = 0; i < number; i++) {
      items.push(i);
  }
  return items;
}
get_alldetails(data2){
  console.log('second func',data2);
  var v=[];
  v=Array(data2);
  // for (let index = v[0].length; index > 0; index--) {
  //   const element = v[0][index];
  //   console.log("vvvv ",element);
  //   this.f_urls[element.content_url_id]=[];
  //   this.f_names[element.content_url_id]=[];

  // }
for(var i= data2.length; i> 0; i--){
  var content_details = data2[i];

  console.log('in for loop',content_details);
  
  // this.f_urls[content_details.content_url_id]=[];
  // this.f_urls[content_details.content_url_id].push(content_details.content_url);
  // console.log(this.f_urls);
  // this.f_names[content_details.content_url_id]=[];
  // this.f_names[content_details.content_url_id].push(content_details.content_url);
}
}
}
