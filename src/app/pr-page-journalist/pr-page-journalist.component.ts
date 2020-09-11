import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-pr-page-journalist',
  templateUrl: './pr-page-journalist.component.html',
  styleUrls: ['./pr-page-journalist.component.css']
})
export class PrPageJournalistComponent implements OnInit {

  model: any = {};
  urls: any = {};  
  f_urls: any = {string:Array};
  id: any;
details: any;
count:any;

constructor(private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id=3;
    this.get_details(this.id);
  }

  getDownload(targetUrl){
    this.userService.getDownloads(targetUrl);
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
                id++; 
                console.log("urls ", this.urls);
                console.log("final",Object.keys(this.urls).length);
                // for (let index = 0; index < this.urls.length; index++) {
                //   const element = this.urls[index];
                //   console.log("element",element);
                  
                // }
                for (const [key, value] of Object.entries(this.urls)) { 
                  console.log(key, value);
                  var v=[];
                  v=Array(value);
                  console.log("v ",v[0]);
                  for (let index = 0; index < v[0].length; index++) {
                    const element = v[0][index];
                    console.log("vvvv ",element);
                    this.f_urls[element.content_url_id]=[];
                    
                  }
                  for (let index = 0; index < v[0].length; index++) {
                    const element = v[0][index];
                    console.log("vvvvvvvv ",element.content_url_id);
                    this.f_urls[element.content_url_id].push(element.content_url);
                    // console.log("ffffff",this.f_urls);
                  }
                }                
                // for (let j = 0; j < element.length; j++) {
                //   this.f_urls[element[j].content_url_id].push(element[j].content_url);                    
                // }
                console.log("f urls ", this.f_urls);
              },
              error => {
                console.log(error);
            }
          );
    }
  }

  get_details(id) {
    this.userService.show_allposts(id)
        .subscribe(
            data => {

      const data1 = data.json();
              console.log("arun",data1);
                this.details = data1["data"];
                 this.model = data1['data'][0];
                //  this.content_id = data1['data']
                 console.log(this.model);
                 console.log(this.details);
                 this.get_urls(this.details);
                //  console.log("urls after", this.urls);
            },
            error => {
                console.log(error);
            });
}
}
