import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database"
import * as firebase from 'firebase';
import {Fileup} from './fileup';

@Injectable()
export class DataServiceService {

  private customersUrl = 'https://www.therightdoctors.com/api/beta';  // URL to web API
  // tslint:disable-next-line:variable-name
  private  api_key  = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private db: AngularFireDatabase) { }

  private basePath = '/pr-team/image';
  private basePath1 = '/pr-team/video';
  private basePath2 = '/pr-team/audio';
  private basePath3 = '/pr-team/presentation';

  pushFileToStorage(fileUpload: Fileup, foldername) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${foldername}/${fileUpload.file.name}`).put(fileUpload.file);
    return uploadTask;
  }
  pushFileToStorage1(fileUpload: Fileup, foldername) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath1}/${foldername}/${fileUpload.file.name}`).put(fileUpload.file);
    return uploadTask;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
