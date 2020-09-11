// import { Component, OnInit } from '@angular/core';
import {Component, OnInit, ViewChild} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { interval } from 'rxjs';

// import {toPromise} from 'rxjs/add/operator';
import {Fileup} from '../fileup';
import {MatChipInputEvent} from '@angular/material';
import * as firebase from 'firebase/app';
import {DataServiceService} from '../data-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { range, from } from 'rxjs';

@Component({
  selector: 'app-singleuserapproval',
  templateUrl: './singleuserapproval.component.html',
  styleUrls: ['./singleuserapproval.component.css']
})
export class SingleuserapprovalComponent implements OnInit {
  model: any = {};
  model2: any = {};
  limit: any = {};
  size_limit: any = {};
  sf=[];
  details: any ;
  progress: { percentage: string } = {percentage: 'fg'};
  uploadedfile = '';
    draft_checker : any = 0;
  selectedFiles: FileList;
  currentFileUpload: Fileup;
  // currentUpload: Upload;
  loading: boolean = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  user: any;
  limit_upload_model:any={};
  snap: any;
  video: any;
  value: any;
  something_is_uploaded: boolean;
  j:any ;
  k: any;
  all_files=[];
  names=[];
  names2=[];
  posted_files=[];
  is_uploaded=[];
  countddd:any;
  range=[];
  posted_urls_count:any = 0;

  my_id:any;
  all_countries: any;
  all_states: any;
  all_cities: any;
  selectedCountry: any;
  selectedstate: any;
  selectedcity: any;
  status: any;
  Checked: boolean;
  count:any;
  image_c:any;
  video_c: any;
  audio_c:any;
  pdf_c:any;
  selection:boolean;
  uploaded: boolean;
  posted: boolean;
  plan:any;
  links: any;
  plans=['lite','plan','pro'];
  plan_limit: any ={};
  drafts:any; 
  f_urls=[];
  f_names=[];
  urls=[];
  l: any;
  final_id:any;
  id:any;
  decision_status:any;
  title:any;
  content_id:any;
  my_idb:any;
  constructor(private router: Router, private dataservice: DataServiceService, private userService: UserserviceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.title=params['title'];
      console.log(this.id, this.title);
    })
    this.get_details();
  }
  createRange(number) {
    var items: number[] = [];
    for( var i = 0; i < number; i++) {
        items.push(i);
    }
    return items;
  }
get_details(){
  this.userService.get_contentdata(this.id,this.title)
  .subscribe(
      data => {

const data1 = data.json();
        console.log("araniiiiiun",data1);
          // this.details = data1["data"];
          //  this.model = data1['data'][0];
          //  this.content_id = data1['data']
          //  console.log("urls after", this.urls);
          this.links=data1['data'];
          console.log("drafts",this.drafts);
          // this.filter_drafts(this.drafts);
      },
      error => {
          console.log(error);
      });
}
send_comments(){
  this.content_id = this.model.currentid;
  this.userService.send_comments(this.content_id, this.model)
  .subscribe(
      data => {
     if(data['success']){
      //  this.decision_status=true;
      alert('Comments sent to user!')
     }
     else{
      // this.decision_status=false;
    }
      },
      error => {
          console.log(error);
      });
}
update_details(){
  this.content_id=this.model.currentid;
  console.log('xxxxxxxxxx',this.model);
  
  this.userService.update_acceptance_status(this.content_id, this.model)
  .subscribe(
      data => {
     if(data['success']){
       this.decision_status=true;
     }
     else{
      this.decision_status=false;
    }
      },
      error => {
          console.log(error);
      });
      this.update_qc();
      this.send_comments();
    }
 update_qc(){
   if(this.model.o_id == '1'){
     this.content_id=this.model.currentid;
     this.userService.insert_to_qc(this.content_id, this.model)
     .subscribe(
      data => {
     if(data['success']){
     alert('inserted!!!');
     }
     else{
      // alert('not inserted');
    }
      },
      error => {
          console.log(error);
      });
   }
   else{
     alert('cannot be inserted into QC');
   }
  }


}
