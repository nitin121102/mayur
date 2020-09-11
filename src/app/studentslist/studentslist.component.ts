import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {UserserviceService} from '../userservice.service'
@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
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
  constructor(private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.user.medico_id;
    this.get_details();
  }
get_details(){
  this.userService.show_student_applications()
  .subscribe(
      data => {

let data1 = data.json();
 this.data2 = data1['data'];
// this.pay_stat= data1['payment_status']
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
}
