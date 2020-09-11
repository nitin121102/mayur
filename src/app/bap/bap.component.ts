import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material";
import {UserserviceService} from '../userservice.service';
// import * as $ from 'jquery';
import 'bootstrap';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-bap',
  templateUrl: './bap.component.html',
  styleUrls: ['./bap.component.css']
})
export class BapComponent implements OnInit {
  seasons: string[] = ['Networking', 'Event Appereance', 'Volunteer'];
  seasons2: string[] = ['Yes','No'];

  title = 'sdsj';
  model: any = {};
  job_type: any;
  tp: any;
  inputChecking = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  bap_details: any = {};
  all_states: any;
  selectedstate: any;
  all_cities: any;
  selectedcity: any;
  favoriteSeason: string;
  favoriteSeason2: string;
  stream: any;


  constructor(private service: UserserviceService, private myroute: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stream = params['stream'];
      console.log('this is happening')
    });

  }

  get_states(countryId) {
    console.log('get states',countryId);
    this.service.getAllStates(countryId).subscribe(
        data => {
          var dat=data.json()
          console.log(data.json())
          this.all_states = dat['states'];
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
  }

  get_cities(stateId) {
    console.log(stateId);
    console.log('get cities');
    this.service.getAllCities(stateId).subscribe(
        data => {
          console.log(data)
          var d=data.json()
          this.all_cities = d['cities'];
          console.log('I CANT SEE DATA HERE getAllcitiess : ', this.all_cities);
        }
    );
  }
  onSelectcity(cityId: number) {
    // this.selectedcity = null;
    for (var i = 0; i < this.all_cities.length; i++) {
      if (this.all_cities[i].city_id == cityId) {
        this.selectedcity = this.all_cities[i].city_name;
      }
    }
  }
  onSubmit() {
    console.log(this.bap_details);

    const data = JSON.stringify(this.bap_details);
    this.service.updatebapdetails(data).subscribe(
        data1 => {
          if (data1['success']) {
            console.log('Areyyy', data1);
            alert('Bap details Updated successfully');
          }
        },
        error => {
          console.log(error);
        });
  }
}
