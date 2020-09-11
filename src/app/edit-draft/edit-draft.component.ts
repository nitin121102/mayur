import {Component, OnInit, ViewChild} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { interval } from 'rxjs';

// import {toPromise} from 'rxjs/add/operator';
import {Fileup} from '../fileup';
import {MatChipInputEvent} from '@angular/material';
import * as firebase from 'firebase/app';
import {DataServiceService} from '../data-service.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { range, from } from 'rxjs';

@Component({
  selector: 'app-edit-draft',
  templateUrl: './edit-draft.component.html',
  styleUrls: ['./edit-draft.component.css']
})
export class EditDraftComponent implements OnInit {

  // @ViewChild(NgForm) f: NgForm;
  model: any = {};
  model2: any = {};
  limit: any = {};
  size_limit: any = {};
  sf=[];
  details: any ;
  progress: { percentage: string } = {percentage: 'fg'};
  uploadedfile = '';
    draft_checker : any = 0;
  selectedFiles: FileList;
  currentFileUpload: Fileup;
  // currentUpload: Upload;
  loading: boolean = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  user: any;
  limit_upload_model:any={};
  snap: any;
  video: any;
  value: any;
  something_is_uploaded: boolean;
  j:any ;
  k: any;
  all_files=[];
  names=[];
  names2=[];
  posted_files=[];
  is_uploaded=[];
  countddd:any;
  range=[];
  posted_urls_count:any = 0;

  my_id:any;
  all_countries: any;
  all_states: any;
  all_cities: any;
  selectedCountry: any;
  selectedstate: any;
  selectedcity: any;
  status: any;
  Checked: boolean;
  count:any;
  image_c:any;
  video_c: any;
  audio_c:any;
  pdf_c:any;
  selection:boolean;
  uploaded: boolean;
  posted: boolean;
  plan:any;
  plans=['lite','plan','pro'];
  plan_limit: any ={};
  drafts:any; 
  f_urls=[];
  f_names=[];
  urls=[];
  l: any;
  final_id:any;
  id:any;
  my_idb:any;
  constructor(private router: Router, private dataservice: DataServiceService, private userService: UserserviceService, private route:ActivatedRoute) {
    interval(5000).subscribe(x => {
      if(this.posted==false){
        if(this.draft_checker==0){
          this.draft();
        }else{
          this.draft1();
        }
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.video = 0;
    this.countddd=0;
    this.Checked = false;
    this.uploaded = false;
    this.selection = false;
    this.plan = 'lite';
    this.something_is_uploaded = true;
    this.posted = false; 
    this.j = 0;
    this.l=0;
    this.count = 0;
    this.k =0;
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.model.authority = this.user.authority;
    this.model.status_form = 0;
    this.get_countries();
    this.get_details(this.user.pr_team_id);
    this.get_details2(this.user.pr_team_id);
    this.get_drafts(this.user.pr_team_id);
    this.get_final_list();
  }
  changeValue(value) {
    this.Checked = !value;
}

  get_drafts(id){
    this.userService.show_myposts(id)
        .subscribe(
            data => {

      const data1 = data.json();
              console.log("araniiiiiun",data1);
                // this.details = data1["data"];
                //  this.model = data1['data'][0];
                //  this.content_id = data1['data']
                //  console.log("urls after", this.urls);
                this.drafts=data1['data'];
                console.log("drafts",this.drafts);
                this.filter_drafts(this.drafts);
            },
            error => {
                console.log(error);
            });
  }

  filter_drafts(drafts){
    for (let index = 0; index < drafts.length; index++) {
      const element = drafts[index];
      console.log("element", element);
      if(element.id == this.id){
        var finalDraft = element;
        break;
      }
    }
    console.log("final drafts",finalDraft);
    this.model=finalDraft;
    this.final_id = finalDraft.id;
    console.log("final id",this.final_id);
  }

  // get_plan_limit(){
  //   this.plan_limit.pdf=20;
  //   this.plan_limit.audio=10;
  //   this.plan_limit.video=10;
  //   this.plan_limit.image=20;
  // }

  size_limits(){
    this.size_limit.pdf = 3000000;
    this.size_limit.video = 50000000;
    this.size_limit.audio = 10000000;
    this.size_limit.image = 10000000;
  }

  toggle1() {
    this.video = 1;
    this.value = 'audio/*';
  }
  toggle2() {
    this.video = 1;
    this.value = 'video/*';
  }
  toggle3() {
    this.video = 1;
    this.value = 'image/*';
  }
  toggle4() {
    this.value = '*';
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

createRange(number) {
  var items: number[] = [];
  for( var i = 1; i <= number; i++) {
      items.push(i);
  }
  return items;
}


draft(){
  this.model.type=""; 
  this.model.name = this.user.username;
  this.model.pr_content_id = this.user.pr_team_id;
  this.model.content_url = '';
  this.model.flag = true;
  this.model.city = this.selectedcity;
  this.model.state = this.selectedstate;
  this.model.country = this.selectedCountry;
  localStorage.setItem('aniruddha', this.model);
  this.userService.draft_content(this.model)
    .subscribe(
      data   => {
        console.log(data['_body'],"adrun")
        this.my_idb = JSON.parse(data['_body']);
      if (this.my_idb['success']) {
        // this.posted=true;
        this.my_id = this.my_idb.insert_id;
        console.log(this.my_id, "adrun")
      }
      });
    for (let i = 0; i < this.posted_files.length; i++) {
      this.model2.content_url = this.all_files[i];
      this.model2.content_name = this.names[i];
      this.model2.content_url_id = this.my_id;
      this.userService.draft_urls(this.model2)
        .subscribe(
            data   => {
              if (data['success'] && i==this.posted_files.length-1) {
                console.log("ok");
              }
        });
      }
      this.draft_checker = 1;

}

draft1(){
  this.model.type=""; 
  this.model.name = this.user.username;
  this.model.pr_content_id = this.user.pr_team_id;
  this.model.content_url = '';
  this.model.flag = true;
  this.model.city = this.selectedcity;
  this.model.state = this.selectedstate;
  this.model.country = this.selectedCountry;
  localStorage.setItem('aniruddha', this.model);
  console.log(this.posted_files,"vjhhhhhhhhhbbbbbbbbbbbbbbbbb");    this.userService.update_draft_content(this.model, this.my_id)
    .subscribe(
      data   => {
        this.my_idb = JSON.parse(data['_body']);
      if (this.my_idb['success']) {
        // this.posted=true;
        // this.my_id = data['insert_id'];
      }
      });
    if(this.posted_files.length>0 && this.posted_urls_count==1){
      var start = performance.now();
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa",this.posted_files.length);
    for (let i = 0; i < this.posted_files.length; i++) {
      if(i==0){
      console.log(this.model2.content_url)
      this.model2.content_url = this.all_files[i];
      console.log(this.model2.content_name)
      this.model2.content_name = this.names[i];
      console.log(this.model2.content_url_id)
      this.model2.content_url_id = this.my_id;
      this.userService.update_draft_urls(this.model2, this.my_id)
        .subscribe(
            data   => {
              if (data['success']) {
              }
        });
      }else{
        console.log(this.model2.content_url,"1")
        this.model2.content_url = this.all_files[i];
        console.log(this.model2.content_name)
        this.model2.content_name = this.names[i];
        console.log(this.model2.content_url_id)
        this.model2.content_url_id = this.my_id;
        
        this.userService.draft_urls(this.model2)
          .subscribe(
              data   => {
                if (data['success']) {
                  console.log("aaaaaaaaaaaaabbbbbaa",i);
                }
          });   
      }
      }
      var end = performance.now();
      var timeTaken = end - start; 
          console.log("Function took " + 
                  timeTaken + " milliseconds");
    }else if(this.posted_files.length>0 && this.posted_urls_count==0){
      console.log(this.posted_urls_count)
      this.posted_urls_count= 1;
      console.log(this.posted_urls_count,"1")
    for (let i = 0; i < this.posted_files.length; i++) {
      this.model2.content_url = this.all_files[i];
      this.model2.content_name = this.names[i];
      this.model2.content_url_id = this.my_id;
      this.userService.draft_urls(this.model2)
        .subscribe(
            data   => {
              if (data['success'] && i==this.posted_files.length-1) {
                console.log("ok");
              }
        });
      }
    }else if(this.posted_files.length==0){
      this.posted_urls_count= 0;
    }
}

async post() {
  this.get_payment_status(this.user.pr_team_id);
  this.get_upload_number(this.user.pr_team_id);
  await this.delay(500);
  console.log(this.status, "ccccccccccccccccccccccccccc")
  if(this.status){
      if(this.posted_files && this.posted_files.length > 0) {
        console.log("selected files",this.posted_files);
        for (let index = 0; index < this.posted_files.length; index++) {
          const element = this.posted_files[index];
          const type = element.type.substring(0,5);
          if(element.type == "application/pdf,application/msword,text/plain,.docx,.doc"){
            console.log("type works",type);
            this.pdf_c--;
          }else if(type == "image"){
            console.log("type works",type);
            this.image_c--;
          } else if(type == "video"){
            console.log("type works",type);
            this.video_c--;
          } else if(type == "audio"){
            console.log("type works",type);
            this.audio_c--;
          }
        }
        this.limit_upload_model.pdf_uploaded=this.pdf_c;
        this.limit_upload_model.image_uploaded=this.image_c;
        this.limit_upload_model.audio_uploaded=this.audio_c;
        this.limit_upload_model.video_uploaded=this.video_c;
        if(this.pdf_c < 0 ||
          this.audio_c < 0 ||
          this.video_c < 0 ||
          this.image_c < 0 )
          {
            alert('Unpublished Plan Limit Exceeded');
            // window.location.reload();
            return; 
          }
          // this.limitUpdate();
          this.postUpdate();
        console.log(this.model);
        console.log("model2 ",this.model2);
        this.model.type=""; 
        this.model.name = this.user.username;
        this.model.pr_content_id = this.user.pr_team_id;
        // await this.snapp(this.snap);
        console.log(this.uploadedfile);
        this.model.content_url = '';
        this.model.flag = true;
        this.model.status_form=1;
        // this.model.id = 101;
        if (this.selectedcity) {
          this.model.city = this.selectedcity;
        }
        if (this.selectedstate) {
          this.model.state = this.selectedstate;
        }
        if (this.selectedCountry){
          this.model.country = this.selectedCountry;
        }
        localStorage.setItem('aniruddha', this.model);
        console.log('sending datadadddddddddddddddd', this.model);
          this.userService.post_content(this.model, this.my_id)
              .subscribe(
                   data   => {
                    console.log("data",data);
                    if (data['success']) {
                      this.posted=true;
                      console.log("idddd ",data['insert_id']);
                      // this.my_id = data['insert_id'];
                      console.log("idzgzdfdddd ",this.my_id);
                    } else {
                      alert('Unpublished');
                    }
              },
              error => {
                console.log(error);
              });
              console.log("delay dtst")
              await this.delay(1000);
              console.log("complete")
              for (let i = 0; i < this.posted_files.length; i++) {
                // const element = array[index];
                this.model2.content_url = this.all_files[i];
                this.model2.content_name = this.names2[i];
                console.log("idd",this.my_id);
                console.log("hey ",this.posted_files.length);
                this.model2.content_url_id = this.my_id;
                this.userService.post_urls(this.model2, this.my_id)
                .subscribe(
                    data   => {
                      console.log(data);
                      if (data['success'] && i==this.posted_files.length-1) {
                        this.send_email();
                        alert('Published Successfully');
                        this.router.navigate(['/Upload']); 
                        // this.router.navigate(['/pricing']);
                      } else {
                        // alert('Unpublished');
                      }
                },
                error => {
                  console.log(error);
                });
              }
      }
    }else{
      window.open('/packages','_blank');
    }
}


  image(){
    console.log("image");
  }

  limitUpdate() {
    console.log('in limitUpdate');
    // this.alertService.success('Registration successful', false);
    this.userService.update_slot_pr(this.limit_upload_model, this.user.pr_team_id)
      .subscribe(
        data => {
          console.log(data);
          //  this.alertService.success('Registration successful', true);
  
            console.log('Details updated Successfully');
        },
        error => {
          console.log(error);
          // this.alertService.error(error);
        });
  }

  postUpdate() {
    this.userService.update_pr_post_upload(this.limit_upload_model, this.user.pr_team_id).subscribe(
      data => {
        console.log(data);
        console.log("Details Updated Successfully");
      },
      error => {
        console.log(error);
      });
  }

  send_email() {
    console.log(this.user.email);
    this.userService.send_email_pr(this.model).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  

  selectFile(event) {
    this.selection = false;
    this.uploaded = false;
    let snap;
    var c=0;
    this.selectedFiles = event.target.files;
    if(this.selectedFiles!=null){
      this.selection = true;
      console.log("done work ",this.selectedFiles[0].type);
      this.something_is_uploaded = true;
    }
    console.log("files",this.selectedFiles);
    
    var filesAmount = this.selectedFiles.length;
    var selectedFiles2 = [];
    // for(let i = 0; i < filesAmount; i++){
    //   this.posted_files.push(this.selectedFiles[i]);
    // }

    for(let i = 0; i < filesAmount; i++){

      const element = this.selectedFiles[i];
      const type = element.type.substring(0,5);
      if(element.type == "application/pdf,application/msword,text/plain,.docx,.doc"){
        console.log("type works2",type);
        if(element.size > this.size_limit.pdf){
          alert("File " +this.selectedFiles[i].name+ " is too big!");
          continue;
        };
      }else if(type == "image"){
        console.log("type works2",type);
        if(element.size > this.size_limit.image){
          alert("File " +this.selectedFiles[i].name+ " is too big!");
          continue;
        };
      } else if(type == "video"){
        console.log("type works2",type);
        if(element.size > this.size_limit.video){
          alert("File " +this.selectedFiles[i].name+ " is too big!");
          continue;
        };
      } else if(type == "audio"){
        console.log("type works2",type);
        if(element.size > this.size_limit.audio){
          alert("File " +this.selectedFiles[i].name+ " is too big!");
          continue;
        };
      }
  selectedFiles2.push(this.selectedFiles[i]);
  this.posted_files.push(this.selectedFiles[i]);
}

this.sf = selectedFiles2;
var filesAmount2 = selectedFiles2.length;

    // for(let i = 0; i < filesAmount; i++)
    // {
      
    //   const file = this.selectedFiles.item(i);
    //   this.is_uploaded[this.j]=false;
    //   this.range.push(this.j);
    //   this.names.push(file['name']);
    //   this.j=this.j+1;
    //   this.currentFileUpload = new Fileup(file);
    //   var a = this.currentFileUpload;
    //   this.dataservice.pushFileToStorage(a, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
    //       (snapshot) => {
    //           // in progress
    //           snap = snapshot as firebase.storage.UploadTaskSnapshot;
    //       },
    //       (error) => {
    //           // fail
    //           console.log(error);
    //       },
    //       () => {
    //           // success
    //          //  console.log('in complete url' + snap.downloadURL);
    //          //  this.uploadedfile = snap.downloadURL;
    //          snap.ref.getDownloadURL().then(url => {
    //            console.log("new",a.file['name']);
    //           //  console.log("name", file['name']);
    //             this.names2.push(a.file['name']);
    //            console.log('complete url ' + url);
    //            this.uploadedfile = url;
    //            this.all_files.push(this.uploadedfile);
    //            this.is_uploaded[this.k] = true;
    //            console.log(this.is_uploaded[this.k])
    //            this.k=this.k+1;
              
    //            c=c+1;
    //            if(c==filesAmount){
    //              this.uploaded=true;
    //            }
    //          });
  
    //       });
    // }
    for(let i = 0; i < filesAmount2; i++)
    {
      
      // const file = this.selectedFiles.item(i);
      const file = selectedFiles2[i];
      this.is_uploaded[this.j]=false;
      this.range.push(this.j);
      this.names.push(file['name']);
      this.j=this.j+1;
      this.currentFileUpload = new Fileup(file);
      var a = this.currentFileUpload;
      this.dataservice.pushFileToStorage(a, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
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
             //  console.log('in complete url' + snap.downloadURL);
             //  this.uploadedfile = snap.downloadURL;
             snap.ref.getDownloadURL().then(url => {
               console.log("new",a.file['name']);
              //  console.log("name", file['name']);
                this.names2.push(a.file['name']);
               console.log('complete url ' + url);
               this.uploadedfile = url;
               this.all_files.push(this.uploadedfile);
               this.is_uploaded[this.k] = true;
               console.log(this.is_uploaded[this.k])
               this.k=this.k+1;
              
               c=c+1;
               if(c==filesAmount2){
                 this.uploaded=true;
               }
             });
  
          });
    }

}

//   validateFile() {
//     console.log("arunsetty")
//     if(this.selectedFiles && this.selectedFiles.length > 0) {
//       console.log("abhinav")
//       let file = this.selectedFiles.item(0);
//       this.currentFileUpload = new Fileup(file);
//       console.log('this is the file = ', file);
//       this.uploaded = true;
//       // Call method in service to include the upload file
//    } else {
//     console.log('no file');
//     this.uploaded = false;
//  }
//    // otherwise call the method with default image.
//   }

  final() {
    this.dataservice.pushFileToStorage1(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          this.snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success

          this.snap.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            this.uploadedfile = downloadURL;
            console.log(this.uploadedfile);
          });

          console.log('Reached till this point');
          this.loading = false;
        });
  }

  deleteFile(index){
    this.names[index]=0;
    var removed = this.names2.splice(index, 1); 
    var removed = this.all_files.splice(index, 1); 

    const element = this.posted_files[index];
            const type = element.type.substring(0,5);
            if(element.type == "application/pdf,application/msword,text/plain,.docx,.doc"){
              console.log("type works",type);
              this.pdf_c--;
            }else if(type == "image"){
              console.log("type works",type);
              this.image_c--;
            } else if(type == "video"){
              console.log("type works",type);
              this.video_c--;
            } else if(type == "audio"){
              console.log("type works",type);
              this.audio_c--;
            }
    var removed = this.posted_files.splice(index, 1);
    console.log("deleted",this.posted_files);
    this.something_is_uploaded = false;
    console.log(this.names)
    for (let i = 0; i < this.all_files.length; i++) {
      console.log("arun");
      if(this.all_files[i]!=0){
        this.something_is_uploaded = true;
        console.log("arunsetty");

        break;
      }
    }
    console.log(this.something_is_uploaded);

  }

  get_details(id) {
    this.userService.edit_details_pr(id)
        .subscribe(
            data => {

      const data1 = data.json();
              console.log("limit done",data1['data'][0].audio_uploaded);
              this.limit.audio=data1['data'][0].audio_uploaded;
              this.limit.video=data1['data'][0].video_uploaded;
              this.limit.image=data1['data'][0].image_uploaded;
              this.limit.pdf=data1['data'][0].pdf_uploaded;
              console.log("audio ",this.limit);
            },
            error => {
                console.log(error);
            });
}

get_details2(id) {
  this.userService.show_mypost_url(id)
      .subscribe(
          data => {

    const data1 = data.json();
            console.log("araniiiiiunaaa",data1);
              this.details = data1["data"];
               console.log(this.details);
               this.get_urls(this.details);
          },
          error => {
              console.log(error);
          });
}

get_final_list(){
  console.log("fffffff",this.final_id);
  console.log(this.f_urls);
  console.log(this.f_names);
  
}

get_urls(details){
  console.log("workssssss",details);
  for (let i = 0; i < details.length; i++) {
    // const element = array[index];
    var id = details[i]['id'];
    console.log("id1",id); 
    this.userService.show_mypost_url(id)
        .subscribe(
            data => {
              const data1 = data.json();
              console.log("yessss",data1);
              this.urls[id] = data1['data'];
              console.log("id",id); 
              console.log("urls ", this.urls);
              console.log("final",Object.keys(this.urls).length);
              for (const [key, value] of Object.entries(this.urls)) { 
                // console.log(key, value);
                var v=[];
                v=Array(value);
                // console.log("v ",v[0]);
                for (let index = 0; index < v[0].length; index++) {
                  const element = v[0][index];
                  console.log("vvvv ",element);
                  this.f_urls[element.content_url_id]=[];
                  this.f_names[element.content_url_id]=[];

                }
                for (let index = 0; index < v[0].length; index++) {
                  const element = v[0][index];
                  console.log("vvvvvvvv ",element.content_url_id);
                  this.f_urls[element.content_url_id].push(element.content_url);    
                  this.f_names[element.content_url_id].push
                  (element.content_name);
                }
              }  
              console.log("f urls ", this.f_urls);
              console.log("f names ", this.f_names);
            },
            error => {
              console.log(error);
          }
        );
  }
}

  get_countries() {
    console.log('get countries');
    this.userService.getAllCountries().subscribe(
        data1 => {
          let data = data1.json();
          console.log(data1.json());
          this.all_countries = data['countries'];
          console.log('I CANT SEE DATA HERE getAllCountries : ', this.all_countries);
        }
    );
  }

  onSelect(countryId: number) {
    // this.selectedCountry = null;
    console.log('In onSelect function');
    console.log(countryId);
    // console.log(this.all_countries[i].country_id);
    for(var i = 0; i < this.all_countries.length; i++) {
      if (this.all_countries[i].country_id == countryId) {
        this.selectedCountry = this.all_countries[i].country_name;
      }
    }
    console.log('Calling get_states');
    this.get_states(countryId);
  }

  get_states(countryId) {
    console.log('get states');
    this.userService.getAllStates(countryId).subscribe(
        data1 => {
          let data = data1.json();
          this.all_states = data['states'];
          console.log('I CANT SEE DATA HERE getAllStates : ', this.all_states);
        }
    );
  }

  onSelectstate(stateId: number) {
    // this.selectedstate = null;
    for (var i = 0; i < this.all_states.length; i++) {
      if (this.all_states[i].state_id == stateId) {
        this.selectedstate = this.all_states[i].state_name;
      }
    }
    this.get_cities(stateId);
  }

  get_cities(stateId) {
    console.log(stateId);
    console.log('get cities');
    this.userService.getAllCities(stateId).subscribe(
        data1 => {
          let data = data1.json();
          this.all_cities = data['cities'];
          console.log('I CANT SEE DATA HERE getAllStates : ', this.all_cities);
        }
    );
  }
  onSelectcity(cityId: number) {
    // this.selectedcity = null;
    for (var i = 0; i < this.all_cities.length; i++) {
      if (this.all_cities[i].city_id == cityId) {
        this.selectedcity = this.all_cities[i].city_name;
      }
    }
  }
  get_payment_status(id){
    this.userService.paymentGet(id)
    .subscribe(
        data   => {
          var data_new = JSON.parse(data['_body']);
          console.log("aaaaaaaaa",data_new['data'][0]['payment_status'])
          if (data_new['data'][0]['payment_status']=='true') {
            this.status = true;
            console.log("hululululu")
          }else{
            this.status = false;
          }
    });
  }
  get_upload_number(id){
    this.userService.uploadGet(id)
    .subscribe(
        data   => {
          var data_new = JSON.parse(data['_body']);
          this.image_c=data_new['data'][0]['image_uploaded'];
          this.video_c=data_new['data'][0]['video_uploaded'];
          this.audio_c=data_new['data'][0]['audio_uploaded'];
          this.pdf_c=data_new['data'][0]['pdf_uploaded'];
          console.log(this.image_c,this.video_c,this.audio_c,this.pdf_c,"xxx")
    });
  }

}
