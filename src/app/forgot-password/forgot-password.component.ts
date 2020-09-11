import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserserviceService} from '../userservice.service';
import {ErrorStateMatcher} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  model: any = {};
  sent: boolean = false;
  err: boolean = false;
  load: boolean = false;
  result: string;
  resultn: string;
  inputChecking = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private users: UserserviceService, private router: Router) { }

  ngOnInit() {
  }
  pwd_reset () {
    this.load = true;
    this.sent = false;
    this.resultn = '';
    this.result = '';
    if (this.model.email) {
      this.users.reset_password(this.model.email)
          .subscribe(data => {
                if (data['success']) {
                  this.sent = true;
                  this.load = false;
                  this.result = 'Reset link sent to your email';
                  alert('Reset Link sent to your email');
                  this.router.navigate(['/login']);
                } else {
                  this.sent = false;
                  this.load = false;
                  this.err = true;
                  this.result = 'Please enter correct email address';
                  alert('Please enter correct email address');
                }
              },
              (err: HttpErrorResponse) => {
                this.load = false;
                this.resultn = 'No Internet Connection';
                console.log(err);
                alert('Wrong credentials');

              });
    }
  }

}
