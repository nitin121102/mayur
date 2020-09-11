import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserserviceService} from '../userservice.service';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  user:any;
  pass:any;
  id: any;
  model: any = {};
  constructor(private router:Router, private route: Router, private uservice:UserserviceService, public auth: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
   
    this.uservice.medico_confirm_register(this.model.email,this.model.password).subscribe(
        data => {
          console.log(data);
          this.model.user_id= this.model.email;
          this.uservice.medico_mail_checking_login(this.model.user_id, this.model.password).subscribe(data1 => {
            // console.log(data1);
            const data = data1.json();
            console.log(data);
          if (data['success']) {
            // console.log('I am inside the condition',data['data'][0]);
            // console.log('I am coming');
            localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
            // alert('Logged in Successfully');
            this.route.navigate(['/personal-details']);
          } else {
            alert('Credentials are incorrect, please try again');
          }
        });
        });
  }
}
