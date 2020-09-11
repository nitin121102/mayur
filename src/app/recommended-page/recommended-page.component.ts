import { Component, OnInit, Inject } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import { WindowRef } from '../window_ref';
import { Location } from '@angular/common';
//import { PrPricingComponent } from '../pr-pricing/pr-pricing.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-recommended-page',
  templateUrl: './recommended-page.component.html',
  styleUrls: ['./recommended-page.component.css']
})
export class RecommendedPageComponent implements OnInit {
  amount: any;
 
  amount_final: any;
  model2: any = {};
  payment_status: boolean;
  interval: any;
  user: any;
  id:any;
  plantype:any;
  private mohit: boolean;

  constructor(private winRef: WindowRef,public dialog: MatDialog, private service: UserserviceService ,  private router: ActivatedRoute, private route: Router, private _location:Location) {
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  openRazorpayCheckout(amount1) {
    let options = {
      key: 'rzp_live_ADxXvgyamm3gCq',
      // key: 'rzp_test_fa5vFaOERY9rLe',
      amount: amount1 * 100,
      name: 'Paying to TheRightDoctors',
      description: 'Purchase Description',
      prefill: {
        name: this.user.username,
        email: this.user.email,
        contact: this.user.mobile,
      },
      notes: {
        address: 'Hello World'
      },
      theme: {
        color: '#3F51B5'
      },
      handler: this.paymentResponseHander.bind(this)
    };
    this.amount_final= amount1;
    var rzp1 = new this.winRef.nativeWindow.Razorpay(options);
    rzp1.open();
}

paymentResponseHander(response) {
alert('Payment successful, payment id:' + response.razorpay_payment_id);
this.mohit = true;
this.id = this.user.pr_team_id;
  this.service.paymentSet(this.id).subscribe(
    data => {
      var data_new = JSON.parse(data['_body']);
      console.log(data_new, "this.data")
      if (data_new['success']) {
        alert('Payment Successful');
        window.close();
      }
      else{
        alert('Payment Failure');
      }
    },
    error => {
      console.log(error);
  });
  this.id = this.user.pr_team_id;
  this.service.paymentSet(this.id).subscribe(
    data => {
      var data_new = JSON.parse(data['_body']);
      console.log(data_new, "this.data")
      if (data_new['success']) {
        alert('Payment Successful');
        window.close();
      }
      else{
        alert('Payment Failure');
      }
    },
    error => {
      console.log(error);
  });
  var sendTranData = {};
  
  sendTranData['TXNID'] = response.razorpay_payment_id;
  sendTranData['PR_ID'] = this.id;
  sendTranData['TXNAMOUNT'] = this.amount_final;
  sendTranData['CURRENCY'] = 'INR';
  sendTranData['STATUS'] = 'TXN_SUCCESS';
  sendTranData['RESPCODE'] = '1';
  sendTranData['RESPMSG'] = 'Txn Success';
  sendTranData['TXNDATE'] = new Date();
  if(this.amount_final==1){
    sendTranData['video_allowed'] = 2;
    sendTranData['audio_allowed'] = 5;
    sendTranData['image_allowed'] = 2;
    sendTranData['pdf_allowed'] = 5;
    sendTranData['article_allowed']= 5;
    sendTranData['is_socialmedia'] = 1;
    sendTranData['is_youtube'] = 0;
    sendTranData['is_podcast'] = 1;
    sendTranData['is_soundcloud'] = 0;
    sendTranData['is_blog'] = 1;
    sendTranData['is_fastest'] = 0;
    sendTranData['is_faster'] = 0;
    sendTranData['is_fast'] =0;
    sendTranData['is_slow'] =1;
    sendTranData['plan_type']='basic';
    this.plantype ='basic';
  }else if(this.amount_final==2){
    sendTranData['video_allowed'] = 5;
    sendTranData['audio_allowed'] = 10;
    sendTranData['image_allowed'] = 10;
    sendTranData['pdf_allowed'] = 10;
    sendTranData['article_allowed'] = 10;
    sendTranData['is_socialmedia'] = 1;
    sendTranData['is_youtube'] = 0;
    sendTranData['is_podcast'] = 1;
    sendTranData['is_soundcloud'] = 1;
    sendTranData['is_blog'] = 1;
    sendTranData['is_fastest'] = 0;
    sendTranData['is_faster'] = 0;
    sendTranData['is_fast'] = 1;
    sendTranData['is_slow'] = 0;
    sendTranData['plan_type']='premium';
    this.plantype ='premium';
  }else if(this.amount_final==3){
    sendTranData['video_allowed'] = 50;
    sendTranData['audio_allowed'] = 50;
    sendTranData['image_allowed'] = 10;
    sendTranData['pdf_allowed'] = 50;
    sendTranData['article_allowed'] = 50;
    sendTranData['is_socialmedia'] = 1;
    sendTranData['is_youtube'] = 1;
    sendTranData['is_podcast'] = 1;
    sendTranData['is_soundcloud'] = 1;
    sendTranData['is_blog'] = 1;
    sendTranData['is_fastest'] = 0;
    sendTranData['is_faster'] = 1;
    sendTranData['is_fast'] = 0;
    sendTranData['is_slow'] = 0;
    sendTranData['plan_type']='pro';
    this.plantype ='pro';
  }
  else if(this.amount_final==4){
    sendTranData['video_allowed'] = 200;
    sendTranData['audio_allowed'] = 200;
    sendTranData['image_allowed'] = 200;
    sendTranData['pdf_allowed'] = 200;
    sendTranData['article_allowed'] = 1000;
    sendTranData['is_socialmedia'] = 1;
    sendTranData['is_youtube'] = 1;
    sendTranData['is_podcast'] = 1;
    sendTranData['is_soundcloud'] = 1;
    sendTranData['is_blog'] = 1;
    sendTranData['is_fastest'] = 1;
    sendTranData['is_faster'] = 0;
    sendTranData['is_fast'] = 0;
    sendTranData['is_slow'] = 0;
    sendTranData['plan_type']='express'; 
    this.plantype ='express';
  }
  this.service.to_pr_transaction_tbl(JSON.stringify(sendTranData)).subscribe(data =>{
    console.log('sent data to pr_transaction_tbl: ', data);
  });
  this.service.update_pr_subscription_details(sendTranData, this.id).subscribe(data =>{
    console.log('sent data to pr_team_tbl: ', data);
  });
  this.service.plan_pr_team_tbl(this.plantype, this.id).subscribe(data =>{
    console.log('sent data to pr_team_tbl: ', data);
  });
}
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '420px';
    dialogConfig.width = '700px';
    dialogConfig.data= {contentToDisplay:"You have already answered  the question."};
    this.dialog.open(PublishingPlanComponent, dialogConfig);
  }

}



@Component({
  selector: 'app-publishing-plan',
  templateUrl: './publishing-plan-component.html',
  styleUrls: ['./publishing-plan-component.css']
})
export class PublishingPlanComponent {

speed: any;
media: any;
form: any;
quantity: any;
platform:any;
volume:any;

Categoryselected: string;
//Category: string[] = ['Cardiology', 'Diabetology', 'Neurology', 'Psychiatry', 'Gynaecology'];
constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef  <PublishingPlanComponent >, private router: Router,private dialog: MatDialog) { }

                                                                      	
                                                                                     	
      myFunction2(token,ti) {         
        this.speed=ti;                                                               	
	//        document.getElementById("recommendtwo").innerHTML = "RECOMMENDED"; 	
        }                                                                            	
        myFunction3(token,w) {                                                       	
        this.volume=w;                                                                 	
	//  document.getElementById("recommendthree").innerHTML = "RECOMMENDED";     	
        }                                                                            	
        myFunction4(token,plt) {                                                      	
        this.platform=plt;                                                               	
	//        document.getElementById("recommendfour").innerHTML = "RECOMMENDED";	
	}                                                                            	
	recommendthree="";                                                           	
	recommend(){
  console.log("chal ja"); 
                                                      	
	if(this.speed==1 || this.volume==4 || this.platform==1) {
	document.getElementById("one").innerHTML = "RECOMMENDED";                    	
	document.getElementById("two").innerHTML = " ";                               	
	document.getElementById("three").innerHTML = " ";                             	
	document.getElementById("four").innerHTML = " ";                                	
  }          
  else if(this.speed==1 && this.volume==4 && this.platform==1 ){
    document.getElementById("one").innerHTML = "RECOMMENDED";                    	
    document.getElementById("two").innerHTML = " ";                               	
    document.getElementById("three").innerHTML = " ";                             	
    document.getElementById("four").innerHTML = " ";                                	
    }                                                                                       	
	else if(this.speed==2 || this.volume==3 || (this.platform==1 && this.platform==2 )){
	document.getElementById("two").innerHTML = "RECOMMENDED";                      	
	document.getElementById("one").innerHTML = " ";                               	
	document.getElementById("three").innerHTML = " ";                             	
	document.getElementById("four").innerHTML = " ";                                	
  }          
  else if((this.speed==2 && this.volume==3 )&& (this.platform==1 && this.platform==2 )){
    document.getElementById("two").innerHTML = "RECOMMENDED";                      	
    document.getElementById("one").innerHTML = "";                               	
    document.getElementById("three").innerHTML = " ";                             	
    document.getElementById("four").innerHTML = " ";                                	
    }                                                                          	
	else if((this.speed==3 || this.volume==2)|| (this.platform==1 && this.platform==2 && this.platform==3 )){                                                      	
	document.getElementById("three").innerHTML = "RECOMMENDED";                    	
	document.getElementById("one").innerHTML = " ";                               	
	document.getElementById("two").innerHTML = " ";                               
	document.getElementById("four").innerHTML = " ";
  }
  else if((this.speed==3 && this.volume==2) && (this.platform==1 && this.platform==2 && this.platform==3 )){                                                      	
    document.getElementById("three").innerHTML = "RECOMMENDED";                    	
    document.getElementById("one").innerHTML = " ";                               	
    document.getElementById("two").innerHTML = " ";                               
    document.getElementById("four").innerHTML = " ";
    }
	else if((this.speed==4 || this.volume==1 )|| (this.platform==1 && this.platform==2 && this.platform==3 && this.platform==4)){
	console.log("Premium");
	document.getElementById("three").innerHTML = " ";
	document.getElementById("two").innerHTML = " ";
		document.getElementById("one").innerHTML = " ";
		document.getElementById("four").innerHTML = "RECOMMENDED";
  }
  else if(this.speed==4 && this.volume==1 && (this.platform==1 && this.platform==2 && this.platform==3 && this.platform==4)){
    // console.log("Premium");
    document.getElementById("three").innerHTML = " ";
    document.getElementById("two").innerHTML = " ";
      document.getElementById("one").innerHTML = " ";
      document.getElementById("four").innerHTML = "RECOMMENDED";
    }
    else if(this.platform==1 && this.platform==2 && this.platform==3 && this.platform==4){
      // console.log("Premium");
      document.getElementById("three").innerHTML = " ";
      document.getElementById("two").innerHTML = " ";
        document.getElementById("one").innerHTML = " ";
        document.getElementById("four").innerHTML = "RECOMMENDED";
      }
  }
  dclose(){
    this.dialog.closeAll();
    }
	}
