import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-hrlogin',
  templateUrl: './hrlogin.component.html',
  styleUrls: ['./hrlogin.component.css']
})
export class HrloginComponent implements OnInit {
  user_id:any;
  password:any;
  constructor(private route:Router, private router: ActivatedRoute, private service:UserserviceService, public auth: AuthenticationService) { }
  ngOnInit() {
  }
  login() {
    console.log(this.user_id);
    // this.service.mail_checking_login(this.user_id, this.password).subscribe(data1 => {
    //   // console.log(data1);
    //   const data = data1.json();
    //   console.log("data ",data);
    //   if (data['success']) {
    //     // console.log('I am inside the condition',data['data'][0]);
    //     // console.log('I am coming');
    //     localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
    //     alert('Logged in Successfully');
    //     this.route.navigate(['/pr-journalist-page']);
    //   } else {
    //     alert('Credentials are incorrect, please try again');
    //   }
    // });
    if(this.user_id == 'hr@therightdoctors.com' && this.password == 'trdhr123!!!'){
      // localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
      alert('Logged in Successfully');
      // window.open('/editor-approval');
      this.route.navigate(['/studentslist']);
    }
    else{
      alert('Credentials are incorrect');
    }
  }
}
