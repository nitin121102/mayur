import {Component, OnInit, ViewChild} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pr-register',
  templateUrl: './pr-register.component.html',
  styleUrls: ['./pr-register.component.css']
})
export class PrRegisterComponent implements OnInit {
  returnUrl: any;
  model2: any = {};
  m_verify: boolean = false;
  verification_code: boolean = false;
  users: any = {};
  phone2: any;
  expireDate: any;
  // @ts-ignore
  @ViewChild(NgForm) f: NgForm;

  selected: any;
  authority: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  selecte = new FormControl('', [
    Validators.required,
    Validators.email,
  ])
  constructor(
      private service: UserserviceService,
      private route: Router,
      private router: ActivatedRoute) {
  }

  ngOnInit() {
    // this.router.params.subscribe(params => {
    //   console.log('Authority name is ',params);
    //   this.authority = params['authority'];
    //   this.model2.authority = this.authority;
    //   localStorage.setItem('Mail_slug', this.authority);
    // });
    // this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
  }
  verify_code(){
    console.log('The OTP will be sent!!');
    this.service.verify_code(this.model2.country_code,this.model2.mobile).subscribe
    (data=> {
        console.log(data);
        if(data['success']){
            alert('Verification Done');
            this.verification_code = false;
            this.m_verify=true;
        } else{
            alert('Already Verified this number...Try with another number');
            this.verification_code = true;
            this.m_verify=false;
        }
    });
}
phone_btn_onclick() {
 
          //alert('Processing....');
          // this.model2.mobile = this.model2.user_id;
          // this.model2.country_code ='+91';
          this.model2.via ='sms';
          console.log(this.model2.country_code);
          this.service.verification_code_send(this.model2.mobile, this.model2.country_code).subscribe
          (data=> {
              console.log(data);
              if(data['success']){
                  //alert('Verification code sent to your mobile number');
                  this.verification_code = true;
                  this.m_verify = true;
              } else{
                  alert('Error');
              }
          });
  
}

  register() {
    console.log('hiii');
    // this.model2.payment_status = 'false';
    // this.model2.validity_till= 2500000000000;
    this.service.medico_registration(JSON.stringify(this.model2))
        .subscribe(
            data => {
              console.log(data);
              if (data['success']) {
                alert('Verification Required:Please check your Inbox/Spam folder to verify your email ID');
                // this.enter_to_PRtable();
                // jljl
                this.route.navigate(['/login']);
              }
              else{
                alert('Email already registered');
              }
            },
            error => {
              console.log(error);
            });
  }
}
