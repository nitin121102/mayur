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
// import {Upload} from '../uploads/shared/upload';
// import * as _ from 'lodash';
// import {UploadService} from '../uploads/shared/upload.service';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent implements OnInit {
  interval;
  model: any = {};
  model2: any = {};
  limit: any = {};
  size_limit: any = {};
  sf=[];
  progress: { percentage: string } = {percentage: 'fg'};
  uploadedfile = '';
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
  uploads: any;
  is_uploaded=[];
  countddd:any;
  validity_till:any;
  currT: any;
  range=[];
  my_id:any;
  all_countries: any;
  posted_urls_count:any = 0;
  all_states: any;
  all_cities: any;
  selectedCountry: any;
  selectedstate: any;
  selectedcity: any;
  status: any;
  Checked: boolean;
  count:any;
  image_limit:any;
  video_limit:any;
  audio_limit:any;
  pdf_limit:any;
  image_c:any;
  accept: any;
  limit_status:boolean;
  trial_status:boolean;
  video_c: any;
  draft_checker : any = 0;
  audio_c:any;
  pdf_c:any;
  selection:boolean;
  my_idb:any;
  uploaded: boolean;
  posted: boolean = false;
  plan:any;
  qc_status:any;
  pub_status:any;
  // user: any;
  name: any;
  email: any;
  gender: any;
  country: any;
  videourl:any;
  mobile: any;
  id: any;
  plans=['lite','plan','pro'];
  // plan_limit: any ={};
  drafts:any;  

  constructor(private router: Router, private dataservice: DataServiceService, private userService: UserserviceService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.id = this.user.pr_team_id;
    this.name = this.user.username;
    this.email = this.user.email;
    this.gender = this.user.gender;
    this.country = this.user.country_code;
    this.mobile = this.user.mobile;
    this.get_upload_number(this.user.pr_team_id);
    this.get_upload_limit(this.user.pr_team_id);
    this.publication_status(this.user.pr_team_id);
  }
  publication_status(id){
    this.userService.publication_status(id)
    .subscribe(
      data => {
        console.log('my publication statussss',data);
        var data_status = JSON.parse(data['_body']);
        console.log('data body',data_status);
        this.qc_status= data_status['data'][0]['status'];
        this.videourl= data_status['data'][0]['video_id'];
        this.accept = data_status['data'][0]['acceptance_status'];
        console.log('acceptance....',this.accept);
        console.log(this.videourl);
        console.log('QC Status',this.qc_status);
        if( this.accept == 0){
          this.pub_status = 'In Review';
        }
        else{
        if( this.qc_status == null || this.qc_status == 0){
          this.pub_status = 'Pending for Quality Check';
        }
        else if( this.qc_status == 1 ){
          this.pub_status = 'In Editing Mode';
        }
        else if(this.qc_status == 2){
          this.pub_status = 'Editing Done. Final Link was sent to your mail for approval';
        }
        else{
          this.pub_status = 'In Review';
        }
      }
      });
    
  }
  get_upload_number(id){
    this.userService.uploadGet(id)
    .subscribe(
        data   => {
          var data_new = JSON.parse(data['_body']);
          console.log('this is author data',data_new);
          this.image_c=data_new['data'][0]['image_uploaded'];
          this.video_c=data_new['data'][0]['video_uploaded'];
          this.audio_c=data_new['data'][0]['audio_uploaded'];
          this.pdf_c=data_new['data'][0]['pdf_uploaded'];
	  //	  console.log(this.image_c,this.video_c,this.audio_c,this.pdf_c,"xxx")
	  console.log(this.image_c,this.video_c,this.audio_c,this.pdf_c,"xxx")
	  this.uploads=this.image_c+this.video_c+this.audio_c+this.pdf_c;
    });
  }
  get_upload_limit(id){
    console.log('Inside upload package limit');
    this.userService.getuploadlimit(id)
    .subscribe(
        data   => {
          var data_new = JSON.parse(data['_body']);
          this.image_limit=data_new['data'][0]['image_allowed'];
          this.video_limit=data_new['data'][0]['video_allowed'];
          this.audio_limit=data_new['data'][0]['audio_allowed'];
          this.pdf_limit=data_new['data'][0]['pdf_allowed'];
	  	  console.log(this.image_c,this.video_c,this.audio_c,this.pdf_c,"xx54545x")
        
    });
  }
}
