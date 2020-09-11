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
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent implements OnInit {
  returnUrl: any;
  model2: any = {};
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
    this.router.params.subscribe(params => {
      console.log('Authority name is ',params);
      this.authority = params['authority'];
      this.model2.authority = this.authority;
      localStorage.setItem('Mail_slug', this.authority);
    });
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '';
  }

  register() {
    console.log('hiii');
    this.model2.payment_status = false;
    this.model2.validity_till= 2500000000000;
    this.service.medico_registration(JSON.stringify(this.model2))
        .subscribe(
            data => {
              console.log(data);
              if (data['success']) {
                alert('Registered Successfully');
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
