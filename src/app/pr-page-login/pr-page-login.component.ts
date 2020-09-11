import {APP_ID, Component, Inject, OnInit, PLATFORM_ID, ViewChild, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserserviceService} from '../userservice.service';
import {NgForm, FormGroupDirective, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-pr-page-login',
  templateUrl: './pr-page-login.component.html',
  styleUrls: ['./pr-page-login.component.css']
})
export class PrPageLoginComponent implements OnInit {
  model: any = {};
  returnUrl: any;
  model2: any = {};
  // @ts-ignore
  @ViewChild(NgForm) f: NgForm;

  inputChecking = new FormControl('', [
    Validators.required
  ]);
  countrycode: any;
  temp: any;
  selected: any;
  validity_status: any;

  selecte = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
      private service: UserserviceService,
      private route: Router,
      private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
  }

  login_validation() {
    console.log(this.model.user_id);
    // this.verify_valid();
    this.service.medico_confirmation_status(this.model.user_id)
    .subscribe(
      data11 =>{
        console.log(data11);
        // const data2 = data11.json();
        // console.log(data2);
        var data_new = JSON.parse(data11['_body']);
        this.validity_status=data_new['data'][0]['email_confirm'];
        console.log('this is itttt',this.validity_status)
        if( this.validity_status == 1){
    this.service.medico_mail_checking_login(this.model.user_id, this.model.password).subscribe(data1 => {
      // console.log(data1);
      
      const data = data1.json();
      console.log(data);
      if (data['success']) {
        // console.log('I am inside the condition',data['data'][0]);
        // console.log('I am coming');
        localStorage.setItem('currentUser', JSON.stringify(data['data'][0]));
        // alert('Logged in Successfully');
        this.route.navigate(['/Upload']);
      } else  {
        alert('Credentials are incorrect, please try again');
      }
    });
  }
  else if( this.validity_status == null || this.validity_status == 0){
    alert('Please verify your account.');
  }
  });
  }
 

  function(value) {
    this.countrycode = value;
    this.temp = value;
  }

  register() {
    console.log('hiii');
    // console.log(this.model2);
    this.service.medico_registration(JSON.stringify(this.model2))
        .subscribe(
            data => {
              // console.log(data);
              if (data['success']) {
                alert('Registered Successfully');
                document.getElementById('forml').click();
                // this.route.navigate(['/import-contact-login']);
              }
            },
            error => {
              console.log(error);
            });
  }
}

