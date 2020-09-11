import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserserviceService} from '../userservice.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login-bap',
  templateUrl: './login-bap.component.html',
  styleUrls: ['./login-bap.component.css']
})
export class LoginBapComponent implements OnInit {
  user:any;
  pass:any;
  id: any;

  constructor( private router:Router, private route: ActivatedRoute, private uservice:UserserviceService, public auth: AuthenticationService ) { }


  ngOnInit() {
  }
  login() {
    this.auth.login_bap(this.user,this.pass).subscribe(
        data => {
          console.log(data);
          if(data['data'].length>0) {
            localStorage.setItem("trd_brand", JSON.stringify(data['data'][0]));
            this.id=data['data'][0]['id']
            // alert('Logged in Successfully');
            this.router.navigate(['/profile'])
          }
          else {
            alert('Credentials are incorrect, please try again');
          }
        }
    )
  }
  // login1() {
  //   this.auth.login_bap1(this.user,this.pass).subscribe(
  //       data => {
  //         console.log(data['success']);
  //         if(data['success']) {
  //           localStorage.setItem("currentUser", JSON.stringify(data['data'][0]));
  //           alert('Logged in Successfully');
  //           this.router.navigate(['quality-editor-dashboard/erroneous-videos']);
  //         }
  //         else {
  //           alert('Credentials are incorrect, please try again');
  //         }
  //       }
  //   )
  // }
}
