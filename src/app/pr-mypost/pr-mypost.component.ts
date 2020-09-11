import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-pr-mypost',
  templateUrl: './pr-mypost.component.html',
  styleUrls: ['./pr-mypost.component.css']
})
export class PrMypostComponent implements OnInit {

  model: any = {};
  urls: any = {};
  range=[];
  l:any;
  f_urls: any = {string:Array};
  f_names: any = {string:Array};
  id: any;
details: any;
count:any;

  constructor(private userService: UserserviceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      console.log("aruun", params);
      this.id = params['id'];
      this.count=0;
      this.l=0;
      console.log("arun", this.id);
      this.get_details(this.id);
    })
  }

  getDownload1(targetUrl,FileName){
    this.userService.getDownloads1(targetUrl,FileName);
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
                    this.range.push(this.l);
                    this.l++;

                    // console.log("ffffff",this.f_urls);
                  }
                }                
                // for (let j = 0; j < element.length; j++) {
                //   this.f_urls[element[j].content_url_id].push(element[j].content_url);                    
                // }
                console.log("f urls ", this.f_urls);
                console.log("f urls length", Object.keys(this.f_urls).length);
                console.log("shgbdgubfbgb", this.f_urls[id]);
                
                for(var i = 0;i< this.f_urls.length;i++){
                  console.log("comment", this.f_urls[i]);
                }
              },
              error => {
                console.log(error);
            }
          );
    }
  }

  createRange(number) {
    var items: number[] = [];
    for( var i = 0; i < number; i++) {
        items.push(i);
    }
    return items;
  }

  get_details(id) {
    this.userService.show_myposts(id)
        .subscribe(
            data => {

      const data1 = data.json();
              console.log("araniiiiiun",data1);
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
