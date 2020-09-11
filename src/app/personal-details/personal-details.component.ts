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
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
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
  usern: any;
  userl: any;
  college: any;
  constructor(private router: Router, private dataservice: DataServiceService, private userService: UserserviceService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log("xx",this.user)
    this.usern =this.user.username;
    this.userl = this.user.lastname;
    this.college = this.user.college;
    // this.model.authority = this.user.authority;
    // this.model.status_form = 0;
    this.validity_till=this.user.validity_till;
    // this.status = this.user.payment_status;
    this.get_countries();
  }
  get_countries() {
    console.log('get countries');
    this.userService.getAllCountries().subscribe(
        data1 => {
          let data = data1.json();
          console.log(data1.json());
          this.all_countries = data['countries'];
          console.log('I CANT SEE DATA HERE getAllCountries : ', this.all_countries);
        }
    );
  }
  onSelect(countryId: number) {
    // this.selectedCountry = null;
    console.log('In onSelect function');
    console.log(countryId);
    // console.log(this.all_countries[i].country_id);
    for(var i = 0; i < this.all_countries.length; i++) {
      if (this.all_countries[i].country_id == countryId) {
        this.selectedCountry = this.all_countries[i].country_name;
      }
    }
    console.log('Calling get_states');
    this.get_states(countryId);
  }

  get_states(countryId) {
    console.log('get states');
    this.userService.getAllStates(countryId).subscribe(
        data1 => {
          let data = data1.json();
          this.all_states = data['states'];
          console.log('I CANT SEE DATA HERE getAllStates : ', this.all_states);
        }
    );
  }

  onSelectstate(stateId: number) {
    // this.selectedstate = null;
    for (var i = 0; i < this.all_states.length; i++) {
      if (this.all_states[i].state_id == stateId) {
        this.selectedstate = this.all_states[i].state_name;
      }
    }
    this.get_cities(stateId);
    console.log('slected state', this.selectedstate);
  }

  get_cities(stateId) {
    console.log(stateId);
    console.log('get cities');
    this.userService.getAllCities(stateId).subscribe(
        data1 => {
          let data = data1.json();
          this.all_cities = data['cities'];
          console.log('I CANT SEE DATA HERE getAllStates : ', this.all_cities);
        }
    );
  }
  personaldetails(){
    
    this.model.country = this.selectedCountry;
    this.model.city =this.selectedcity;
    this.model.state= this.selectedstate;
    this.model.firstname = this.user.username;
    this.model.lastname = this.user.lastname;
    this.model.college = this.user.college;
    this.model.user_id = this.user.medico_id;

    console.log('got the dataaaa', this.model);
    this.userService.applicants_tbl(this.model)
    .subscribe(
      data   => {
        console.log(data['_body'],"adrun")
        this.my_idb = JSON.parse(data['_body']);
        this.router.navigate(['/questionaire']);
      // if (this.my_idb['success']) {
        // this.posted=true;
        // this.my_id = this.my_idb.insert_id;
        // console.log(this.my_id, "adrun")
      // }
      });
  }
  onSelectcity(cityId: number) {
    // this.selectedcity = null;
    for (var i = 0; i < this.all_cities.length; i++) {
      if (this.all_cities[i].city_id == cityId) {
        this.selectedcity = this.all_cities[i].city_name;
      }
    }
  }

}
