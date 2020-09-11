import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { WindowRef } from '../window_ref';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pr-pricing',
  templateUrl: './pr-pricing.component.html',
  styleUrls: ['./pr-pricing.component.css']
})
export class PrPricingComponent implements OnInit {
  Categoryselected: string;
  Category: string[] = ['Cardiology', 'Diabetology', 'Neurology', 'Psychiatry', 'Gynaecology'];
  amount: any;
  amount_final: any;
  quantity: any;
  form: any;
  media: any;
  speed: any;
  model2: any = {};
  payment_status: boolean;
  interval: any;
  user: any;
  id:any;
  private mohit: boolean;
  constructor(private winRef: WindowRef, private service: UserserviceService ,  private router: ActivatedRoute, private route: Router, private _location:Location) {
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.amount1);
    // alert(this.user['pr_team_id']);
  }
  openRazorpayCheckout(amount1) {
      let options = {
      //              key: 'rzp_live_ADxXvgyamm3gCq',
      key: 'rzp_test_QwjEmM8x4IL3Sz',
      plan_id: 'plan_Eid3G0hIh25KOG',
      //      plan_id: 'plan_Eicuc2mClhnfHp',
      total_count: 2,
      //      quantity: 1,
      //      customer_notify: 1,
	//amount: amount1 * 100,
	//amount: 100,
	//name: 'Paying to TheRightDoctors',
	//	subscription_id: this.user.contact,
	//	subscription_card_change: 1,
	//	period: 'monthly',
	//	interval: '1',
	//start_at: Math.floor(Date.now() / 1000)+3,//+604800,
	//	expire_by: Math.floor(Date.now() / 1000)+4,//604800,
	//	addon: [{
	//		item: {
	//			name: "upfront",
	//			amount: 2,
	//			currency: "INR"
	//		}
	//	}],
	//description: 'Purchase Description',
	//	        prefill: {
	//	          name: this.user.username,
	//	          email: this.user.email,
	//	          contact: this.user.mobile,
	//	        },
	//        notes: {
	//          address: 'Hello World'
	//	  },
	//	  notify_info:{
	//	  notify_phone: this.user.mobile,
	//	  notify_email: this.user.email
	//	},
	//        theme: {
	//          color: '#3F51B5'
	//        },
	//		handler: this.paymentResponseHander.bind(this)
      };
      this.amount_final= amount1;
      var rzp1 = new this.winRef.nativeWindow.Razorpay(options);
      rzp1.open();
  }
  paymentResponseHander(response) {
    alert('Payment successful, payment id:' + response.razorpay_payment_id);
    this.mohit = true;
    this.id = this.user.pr_team_id;
    //      this.service.paymentSet(this.id).subscribe(
    //        data => {
    //          var data_new = JSON.parse(data['_body']);
    //          console.log(data_new, "this.data")
    //          if (data_new['success']) {
    //            alert('Payment Successful');
    //            window.close();
    //          }
    //          else{
    //            alert('Payment Failure');
    //          }
    //        },
    //        error => {
    //          console.log(error);
    //      });
      this.id = this.user.pr_team_id;
      //this.service.paymentSet(this.id).subscribe(
      //  data => {
      //    var data_new = JSON.parse(data['_body']);
      //    console.log(data_new, "this.data")
      //    if (data_new['success']) {
      //      alert('Payment Successful');
      //      window.close();
      //    }
      //    else{
      //      alert('Payment Failure');
      //    }
      //  },
      //  error => {
      //    console.log(error);
      //});
      var sendTranData = {};
    
      sendTranData['TXNID'] = response.razorpay_payment_id;
      sendTranData['PR_ID'] = this.id;
      sendTranData['TXNAMOUNT'] = this.amount_final;
      sendTranData['CURRENCY'] = 'INR';
      sendTranData['STATUS'] = 'TXN_SUCCESS';
      sendTranData['RESPCODE'] = '1';
      sendTranData['RESPMSG'] = 'Txn Success';
      sendTranData['TXNDATE'] = new Date();
      if(this.amount_final== 11){
        sendTranData['video_allowed'] = 2;
        sendTranData['audio_allowed'] = 5;
        sendTranData['image_allowed'] = 2;
        sendTranData['pdf_allowed'] = 5;
        sendTranData['article_allowed']= 5;
        sendTranData['is_socialmedia'] = 1;
        sendTranData['is_youtube'] = 0;
        sendTranData['is_soundcloud'] = 0;
        sendTranData['is_blog'] = 1;
        sendTranData['is_fastest'] = 0;
        sendTranData['is_fast'] =0;
        sendTranData['is_slow'] =1;
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
  
      }
      else if(this.amount_final==4){
        sendTranData['video_allowed'] = 100;
        sendTranData['audio_allowed'] = 100;
        sendTranData['image_allowed'] = 100;
        sendTranData['pdf_allowed'] = 100;
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
        
      }
      //this.service.to_pr_transaction_tbl(JSON.stringify(sendTranData)).subscribe(data =>{
      //  console.log('sent data to pr_transaction_tbl: ', data);
      //});
      //this.service.update_pr_subscription_details(sendTranData, this.id).subscribe(data =>{
      //  console.log('sent data to pr_team_tbl: ', data);
      //});
      }
      myFunction1(token,ti) {
        this.quantity=ti;
	//        document.getElementById("recommendtwo").innerHTML = "RECOMMENDED";
        }

      myFunction2(token,ti) {
        this.media=ti;
	//        document.getElementById("recommendtwo").innerHTML = "RECOMMENDED";
        }
        myFunction3(token,w) {
        this.form=w;
	//  document.getElementById("recommendthree").innerHTML = "RECOMMENDED";
        }
        myFunction4(token,ti) {
        this.speed=ti;
	//        document.getElementById("recommendfour").innerHTML = "RECOMMENDED";
	}
	recommendthree="";
	recommend(){
	console.log("chal ja");
	if(this.speed==4){
	document.getElementById("one").innerHTML = "RECOMMENDED";
	document.getElementById("two").innerHTML = "";
	document.getElementById("three").innerHTML = "";
	document.getElementById("four").innerHTML = "";
	}
	else if(this.speed==3){
	document.getElementById("two").innerHTML = "RECOMMENDED";
	document.getElementById("one").innerHTML = "";
	document.getElementById("three").innerHTML = "";
	document.getElementById("four").innerHTML = "";
	}
	else if(this.speed==2){
	document.getElementById("three").innerHTML = "RECOMMENDED";
	document.getElementById("one").innerHTML = "";
	document.getElementById("two").innerHTML = "";
	document.getElementById("four").innerHTML = "";
	}
	else if(this.speed==1){
	console.log("Premium");
	document.getElementById("three").innerHTML = "";
	document.getElementById("two").innerHTML = "";
	document.getElementById("one").innerHTML = "";
	document.getElementById("four").innerHTML = "RECOMMENDED";
	}
	}
}
