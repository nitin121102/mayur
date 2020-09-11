import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-editpr-page',
  templateUrl: './editpr-page.component.html',
  styleUrls: ['./editpr-page.component.css']
})
export class EditprPageComponent implements OnInit {


  model: any = {};
    id: any;
  details: any;
  // data1:any;

  constructor(private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      console.log("arun", this.id);
      this.get_details(this.id);
    })
    
}
register() {
  console.log('in register');
  // this.alertService.success('Registration successful', false);
  this.userService.update_slot_pr(this.model, this.id)
    .subscribe(
      data => {
        console.log(data);
        //  this.alertService.success('Registration successful', true);

          alert('Details updated Successfully');
      },
      error => {
        console.log(error);
        // this.alertService.error(error);
      });
}


  get_details(id) {
    this.userService.edit_details_pr(id)
        .subscribe(
            data => {

      const data1 = data.json();
              console.log("arun",data1);
              console.log(data1["success"]);
              console.log(data1["data"]);
                this.details = data1["data"][0];
                console.log(this.details['pr_team_id']);
                 this.model = data1['data'][0];
            },
            error => {
                console.log(error);
            });
}

}
