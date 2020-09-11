import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WindowRef } from '../window_ref';
// import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  login: boolean = false;
  user: any;
  name: any;
  constructor(private router: Router,private winRef: WindowRef,public dialog: MatDialog) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.login = true;
      this.name = this.user.username;
      console.log(this.name);
    } else {
      this.login = false;
    }
  }
  // close() {
  //   this.dialog.close();
  // }
  logout() {
    console.log('this is fosdksjdvsvs', localStorage.getItem('currentUser'));
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '200px';
    dialogConfig.data= {contentToDisplay:"You have already answered  the question."};
    this.dialog.open(ComingSoonComponent, dialogConfig);
  }
}
@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
  // styleUrls: ['./log-popup-component.css']
})
export class ComingSoonComponent {

Categoryselected: string;
//Category: string[] = ['Cardiology', 'Diabetology', 'Neurology', 'Psychiatry', 'Gynaecology'];
constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <ComingSoonComponent >, private router: Router,private dialog: MatDialog) { }
close() {
  this.dialogRef.close();
}
}
