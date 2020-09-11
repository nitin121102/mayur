import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers, Http, RequestOptions, Response,ResponseContentType} from '@angular/http';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from "firebase";
import {Fileup} from './fileup';
// import {throwError} from 'rxjs';
// import 'rxjs/add/operator/catch';
// // import { map } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators/catchError';
// import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import {ActivatedRoute,Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: Http, private hc: HttpClient, private route: ActivatedRoute,private router: Router) { }







  //bap
  private basePath = '/media-assets-management/post-questions-images';
  private basePath1 = '/media-assets-management/post-video-images';


  getAllStates(id) {
    return this.http.get('https://therightdoctors.com/api/beta/state/'+id+'?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }

  getAllCities(id) {
    return this.http.get('https://therightdoctors.com/api/beta/city/'+id+'?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }
  updatebapdetails(data) {
    return this.http.put('https://therightdoctors.com/api/beta/bap?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': data});
  }
  insertbapdetails(data) {
    return this.http.put('https://therightdoctors.com/api/beta/bap_insert?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': data});
  }

  send_email_pr(model) {
    return this.http.post('https://therightdoctors.com/api/beta/pr_email?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',model)
  }


  pushFileToStorage1(fileUpload: Fileup, foldername) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath1}/${foldername}/${fileUpload.file.name}`).put(fileUpload.file);
    return uploadTask;
  }
  publication_status(id){
    return this.http.get('https://therightdoctors.com/api/beta/medico/publication_status/' + id  + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
  }
  edit_details_pr(id) {
    return this.http.get('https://therightdoctors.com/api/beta/editpr-page/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }
    get_student(id){
      console.log('vghchgc', id);
      return this.http.get('https://therightdoctors.com/api/beta/student-medico/singlestudent/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }
    update_acceptance(id,data){
      // console.log('vghchgc', id);
      return this.http.put('https://therightdoctors.com/api/beta/student-medico/decision/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
    }
    show_myposts(id) {
      return this.http.get('https://therightdoctors.com/api/beta/medico-mypost/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
      }
      plan_pr_team_tbl(plantype,id){
        console.log('this is plan type',plantype);
        return this.http.put('https://therightdoctors.com/api/beta/pr-team/plan_pr_team/' + id +'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',plantype);
      }
      show_posts_submitted() {
        console.log('entered editors approval');
        return this.http.get('https://therightdoctors.com/api/beta/medico/editorial?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
        }
      show_student_applications(){
        console.log('applicants');
        return this.http.get('https://therightdoctors.com/api/beta/student-medico/applicantslist?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
      }
      show_allposts(id) {
        return this.http.get('https://therightdoctors.com/api/beta/pr-allpost/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
        }

      show_mypost_url(id) {
        return this.http.get('https://therightdoctors.com/api/beta/medico-mypost/url/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
        }
        get_plan(id) {
          return this.http.get('https://therightdoctors.com/api/beta/pr-mypost/plan_type/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
          }
        get_all_prids(){
          return this.http.get('https://therightdoctors.com/api/beta/pr-team/getids?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
        }
      

  upload(data){
    alert(data);
    return this.http.post('https://therightdoctors.com/api/beta/bap_upload?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': data}).pipe(map((response:Response) => response.json()));
  }

  //bap



  getDownloads(targetUrl){
    this.http.get(targetUrl,{responseType:ResponseContentType.Blob})
    .subscribe((res:Response)=>{
      var a = document.createElement("a");
      a.href = URL.createObjectURL(res.blob());
      a.download='';
      // start download
      a.click();
    })
  }

  getDownloads1(targetUrl,FileName){
    this.http.get(targetUrl,{responseType:ResponseContentType.Blob})
    .subscribe((res:Response)=>{
      var a = document.createElement("a");
      a.href = URL.createObjectURL(res.blob());
      a.download=FileName;
      // start download
      a.click();
    })
  }


  update_slot_pr(course, id) {
    let x = JSON.stringify(course)
    return this.http.put('https://therightdoctors.com/api/beta/update-pr-page-profile/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
    {'json':x});
}

verification_code_send(phone,country_code){
  const data={
      "country_code":country_code,
      "phone_number":phone,
      "via":"sms",
      "locale":"en"
  };
  return this.http.post('https://msg.therightdoctors.com/api/verification/start',data);}

applicants_tbl(data){
  console.log('insiiiiiiide');
  return this.http.put('https://therightdoctors.com/api/beta/student-medico/applyrole?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data)
}
update_application(data,id){
  console.log('insiiiiiiide');
  return this.http.put('https://therightdoctors.com/api/beta/student-medico/updateapplication/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data)
}
  medico_registration(user) {
    // tslint:disable-next-line:max-line-length
    return this.hc.post('https://therightdoctors.com/api/beta/doctorarticle/medico_registration?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {json: user});
  }
medico_confirmation_status(email){
  return this.http.get('https://therightdoctors.com/api/beta/doctorarticle/medico_confirm_emailstatus/' +email+ '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
}
  // tslint:disable-next-line:variable-name
  getSeniorDoctor(a_id) {
    // tslint:disable-next-line:max-line-length
    return this.hc.get('https://therightdoctors.com/api/beta/getSeniorDoctor/' + a_id + '?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }
  verify_code(token,phone){
    const data={
        "country_code":token,
        "phone_number":phone,
        // "token":token
    };
    console.log(data);
    return this.http.post('https://msg.therightdoctors.com/api/verification/verify3',data);
}
  medico_confirm_register(email,password){
    return this.hc.get('https://therightdoctors.com/api/beta/doctorarticle/medico_verify/' + email+ '/' + password + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }

  medico_mail_checking_login(email, password) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://therightdoctors.com/api/beta/doctorarticle/medico-login/' + email + '/' + password + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }
  get_contentdata(id,title){
    return this.http.get('https://therightdoctors.com/api/beta/medico/fecth_uploaddata/' + id + '/' + title + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg')
  }
  update_acceptance_status(content_id,data){
    return this.http.put('https://therightdoctors.com/api/beta/pr-team/update_acceptance_status/' + content_id  + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data)
  }
  send_comments(content_id,data){
    return this.http.put('https://therightdoctors.com/api/beta/pr-team/send_comments/' + content_id  + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data)
  }
  insert_to_qc(content_id,data){
    return this.http.put('https://therightdoctors.com/api/beta/pr-team/insert_to_qc/' + content_id  + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',data)
  }
  post_urls(data, id) {
    // tslint:disable-next-line:max-line-length
    console.log('THis is to check data',data);
    console.log('THis is to check data',id);
    return this.hc.post('https://therightdoctors.com/api/beta/medico-team/post_urls?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }
  send_email_to_content(data, id){

    console.log('THis is the mailer function',data);
    console.log('THis is to check data',id);
    return this.hc.post('https://therightdoctors.com/api/beta/pr-team/send_email_to_content?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }
  post_content(data, id) {
    // tslint:disable-next-line:max-line-length
    
    console.log('THis is to check data',data);

    console.log('THis is to check data',id);
    return this.hc.post('https://therightdoctors.com/api/beta/medico-team/post_content?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  draft_urls(data) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('https://therightdoctors.com/api/beta/pr-team/draft/urls/medico_post/?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  draft_content(data) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('https://therightdoctors.com/api/beta/pr-team/medico_draft_content?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  update_draft_urls(data, id) {
    // tslint:disable-next-line:max-line-length
    return this.http.put('https://therightdoctors.com/api/beta/medico-team/update_draft_urls?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  update_draft_content(data, id) {
    // tslint:disable-next-line:max-line-length
    return this.http.put('https://therightdoctors.com/api/beta/medico-team/update_draft_content?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  paymentSet(id) {
    return this.http.put('https://therightdoctors.com/api/beta/pr-team/update_payment?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', id);
  }

  paymentGet(id) {
    return this.http.get('https://therightdoctors.com/api/beta/pr-team/get_payment_status?id='+id+'?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', id);
  }
  typepayment(id){
    return this.http.get('https://therightdoctors.com/api/beta/pr-team/get_payment_amount?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', id);
  }
  getuploadlimit(id){
    return this.http.get('https://therightdoctors.com/api/beta/pr-team/get_upload_limit?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg' , id);
  }
  uploadGet(id) {
    return this.http.get('https://therightdoctors.com/api/beta/medico-team/get_upload_number?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', id);
  }

  to_pr_transaction_tbl(data){
    return this.hc.post('https://therightdoctors.com/api/beta/postToPRTransactionTbl/?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':data});
  }

  update_pr_subscription_details(data, id) {
    return this.http.put('https://therightdoctors.com/api/beta/pr-team/update_pr_subscription_details?id='+id+'?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  update_pr_post_upload(data, id) {
    return this.http.put('https://therightdoctors.com/api/beta/medico-team/update_pr_post_upload?id='+id+'&token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': JSON.stringify(data)});
  }

  post_video(data) {
    // tslint:disable-next-line:max-line-length
    return this.hc.post('https://therightdoctors.com/api/beta/`doctorarticle/pr-team/`video?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data);
  }

  getAllCountries() {
    return this.http.get('https://therightdoctors.com/api/beta/country/?token=trdtoken'+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }

  reset_password(email) {
    // tslint:disable-next-line:max-line-length
    return this.hc.get('https://therightdoctors.com/api/beta/forgot/medico_password/' + email + '?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }
  send_acknowledgement(email) {
    // tslint:disable-next-line:max-line-length
    return this.hc.get('https://therightdoctors.com/api/beta/medico-team/send_acknowledgement/' + email + '?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }

  updatePassword(finaljson, id) {
    // tslint:disable-next-line:max-line-length
    return this.hc.put('https://therightdoctors.com/api/beta/medico/update/password/' + id + '?token=trdtoken' + '&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json':finaljson});
  }


private jwt() {
  console.log('in jwt function');
  // create authorization header with jwt token
  /*let currentUser = JSON.parse(localStorage.getItem('currentUser'));*/
  let currentUser = null;
  if (currentUser && currentUser.token) {
    let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
    return new RequestOptions({headers: headers});
  }
}

}
