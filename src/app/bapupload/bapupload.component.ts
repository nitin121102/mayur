import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {Fileup} from '../fileup';
import {UserserviceService} from '../userservice.service';
import 'firebase/database';
import {ActivatedRoute, Route, Router} from '@angular/router';
// import {MatProgressBarModule} from '@angular/material/progress-bar'

const firebaseconfig=  {
  apiKey: 'AIzaSyBegOaO4MOHq0TRJgtcxMHh3as6CRncugI',
  authDomain: 'dpmtrd.firebaseapp.com',
  databaseURL: 'https://dpmtrd.firebaseio.com',
  projectId: 'dpmtrd',
  storageBucket: 'dpmtrd.appspot.com',
  messagingSenderId: '84699580355'
}
firebase.initializeApp(firebaseconfig);

@Component({
  selector: 'app-bapupload',
  templateUrl: './bapupload.component.html',
  styleUrls: ['./bapupload.component.css']
})
export class BapuploadComponent implements OnInit {
  selectedFiles: any;
  currentFileUpload: Fileup;
  // db = firebase.firestore();
  uploadedfile: any;
  progress: { percentage: string } = {percentage: 'fg'};
  model: any;
  loading: any;
  uploadedfile2: any;
  user: any;
  loading2: boolean;

  constructor(private userservice : UserserviceService,private router:Router ,private route: ActivatedRoute) {
console.log('this si happeingn?????')

    // Get a reference to the database service
    // var database = firebase.database();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('this is now',params)
      // this.stream = params['stream'];
      console.log('this is happening')

    });
    this.uploadedfile=null;
    this.uploadedfile2=null;
    this.model = {}
    this.model.image_doctor=null;
    this.model.video_doctor=null;
    this.user = JSON.parse(localStorage.getItem('trd_brand'));
    // console.log('thiss again',this.user, this.user[0].id)
    if(!this.user){
      alert('Please Login to Proceed')
      this.router.navigate(['/brand_login'])
    }


  }

  selectFile(event) {
    let snap;
    this.loading=true;
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new Fileup(file);
    this.userservice.pushFileToStorage1(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success
          snap.ref.getDownloadURL().then(downloadURL=>{console.log('File available at', downloadURL);
            this.uploadedfile=downloadURL;});
          console.log('this is file', this.uploadedfile)
          this.loading = true;
        });

  }

  selectFile2(event) {
    let snap;
    this.loading2=true;
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new Fileup(file);
    this.userservice.pushFileToStorage1(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success
          snap.ref.getDownloadURL().then(downloadURL=>{console.log('File available at', downloadURL);
            this.uploadedfile2=downloadURL;});
          console.log('this is file', this.uploadedfile2)
        });

  }


  On_Submit(i) {
    var sent={};
    this.loading2=false;
    this.loading=false;
    sent['name']= this.user.f_name + ' ' + this.user.l_name;
    sent['email']=  this.user.email_id;
    sent['student_id']= this.user.id;
    console.log('submitting')
    if(i==1){
      console.log('this si it')
      sent['type'] = 'image';
      sent['date']= new Date();
      sent['headline']= this.model.image_headline;
      sent['subheadline'] = this.model.image_sub_headline;
      sent['doctor']= this.model.image_doctor;
      sent['event']=this.model.image_event;
      sent['link']=this.uploadedfile;
    }
    if(i==2){
      console.log('this si not it')
      sent['type']= 'video'
      sent['date']= new Date();
      sent['headline']= this.model.video_headline;
      sent['subheadline'] = this.model.video_sub_headline;
      sent['doctor']= this.model.video_doctor;
      sent['event']=this.model.video_event;
      sent['link']=this.uploadedfile2
    }
    console.log('sent message final', sent);

    this.userservice.upload(JSON.stringify(sent)).subscribe(
        data => {
          console.log(data);
          if(data['success']){
            alert('files uploaded successfully. Check out your gallery to see it.')
          }
        }
    )
    this.uploadedfile2=null;
    this.uploadedfile=null;


  }
}
