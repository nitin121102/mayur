import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-pr-page-journalist-login',
  templateUrl: './pr-page-journalist-login.component.html',
  styleUrls: ['./pr-page-journalist-login.component.css']
})
export class PrPageJournalistLoginComponent implements OnInit {

  user_id:any;
  password:any;

  constructor( private route:Router, private router: ActivatedRoute, private service:UserserviceService, public auth: AuthenticationService ) { }

  ngOnInit() {
  }

  // login() {
  //   console.log("user ",this.user);
  //   console.log("pass  ",this.pass);
  //   this.auth.login_req(this.user,this.pass).subscribe(
  //     data => {
  //       console.log(data['success']);
  //       if(data['success']) {
  //         localStorage.setItem("currentUser", JSON.stringify(data['data'][0]));
  //         alert('Logged in Successfully');
  //         this.router.navigate(['/qc-dashboard'])
  //       }
  //       else {
  //         alert('Credentials are incorrect, please try again');
  //       }
  //     }
  //   )
  // }


  login() {
    console.log(this.user_id);
    this.service.medico_mail_checking_login(this.user_id, this.password).subscribe(data1 => {
      // console.log(data1);
      const data = data1.json();
      console.log("data ",data);
      if (data['success']) {
        // console.log('I am inside the condition',data['data'][0]);
        // console.log('I am coming');
        localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
        alert('Logged in Successfully');
        this.route.navigate(['/pr-journalist-page']);
      } else {
        alert('Credentials are incorrect, please try again');
      }
    });
  }

}
