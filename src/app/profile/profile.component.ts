import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    student_name: any;
  edit: boolean;
  user: any;
  all_states: any;
  selectedstate: any;
  all_cities: any;
  selectedcity: any;

  constructor(private router: Router,private service:UserserviceService) { }

  ngOnInit() {
    this.student_name={}
    this.edit=false;
    this.user = JSON.parse(localStorage.getItem('trd_brand'));
    // console.log('thiss again',this.user, this.user[0].id)
    if(!this.user){
      alert('Please Login to Proceed')
      this.router.navigate(['/brand_login'])
    }
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
  edit2(){
    this.edit=!this.edit;
  }


  onSubmit() {
    console.log(this.user);

    const data = JSON.stringify(this.user);
    this.service.insertbapdetails(data).subscribe(
        data1 => {
          if (data1.json()['success']) {
            console.log('Areyyy', data1);
            alert('Bap details Updated successfully');
          }

            localStorage.setItem("trd_brand", JSON.stringify(this.user));
        },
        error => {
          console.log(error);
        });
  }
}
