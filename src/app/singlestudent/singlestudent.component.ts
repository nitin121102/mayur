import { Component, OnInit } from '@angular/core';
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
  selector: 'app-singlestudent',
  templateUrl: './singlestudent.component.html',
  styleUrls: ['./singlestudent.component.css']
})
export class SinglestudentComponent implements OnInit {

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
  college:any;
  content_id:any;
  my_idb:any;
  constructor(private router: Router, private dataservice: DataServiceService, private userService: UserserviceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.college=params['college'];
      console.log(this.id, this.college);
    })
    this.get_details();
  }
  get_details(){
    this.userService.get_student(this.id)
    .subscribe(
        data => {
  
  const data1 = data.json();
          console.log("araniiiiiun",data1);
            // this.details = data1["data"];
            //  this.model = data1['data'][0];
            //  this.content_id = data1['data']
            //  console.log("urls after", this.urls);
            this.links=data1['data'];
            console.log("drafts",this.links);
            // this.filter_drafts(this.drafts);
        },
        error => {
            console.log(error);
        });
  }
  update_details(){
    console.log('thisssssss', this.model);
    this.userService.update_acceptance(this.id,this.model)
    .subscribe(
        data => {
  
  const data1 = data.json();
          console.log("araniiiiiun",data1);
            // this.details = data1["data"];
            //  this.model = data1['data'][0];
            //  this.content_id = data1['data']
            //  console.log("urls after", this.urls);
            this.links=data1['data'];
            console.log("drafts",this.links);
            // this.filter_drafts(this.drafts);
        },
        error => {
            console.log(error);
        });
  }
}
