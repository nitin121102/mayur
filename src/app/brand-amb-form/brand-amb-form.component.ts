import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {UserserviceService} from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MyErrorStateMatcher} from '../bap/bap.component';

@Component({
  selector: 'app-brand-amb-form',
  templateUrl: './brand-amb-form.component.html',
  styleUrls: ['./brand-amb-form.component.css']
})
export class BrandAmbFormComponent implements OnInit {
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
  heroForm: any;
  hero: any;


  constructor(private service: UserserviceService, private myroute: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log('this is now',params)
      this.stream = params['stream'];
      console.log('this is happening')
    });
    this.get_states(100)
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
          console.log(data1, data1.json())
          if (data1.json()['success']) {
            console.log('Areyyy', data1);
            alert('Bap details Updated successfully');
          }
        },
        error => {
          console.log(error);
        });
  }

}
