import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:Http, private httpclient:HttpClient) { }

  //bap
  login_bap(email,password) {
    return this.http.get('https://therightdoctors.com/api/beta/bap/login/'+email+'/'+password+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg').pipe(map((response: Response) => response.json()));
  }
  //bap


  
  isLogged() {
    console.log(localStorage.getItem('currentUser') );
    return localStorage.getItem('currentUser') != null;
  }

  // logout() {
  //   console.log(localStorage.getItem('currentUser'));
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   localStorage.removeItem('course_id');
  // }

  get_local_storage_user() {
    console.log(localStorage.getItem('currentUser'));
    // remove user from local storage to log user out
    return localStorage.getItem('currentUser');
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
