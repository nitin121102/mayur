import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slidertry',
  templateUrl: './slidertry.component.html',
  styleUrls: ['./slidertry.component.css']
})
export class SlidertryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<img src='/assets/arrow_back_ios-black-18dp/1x/baseline_arrow_back_ios_black_18dp.png'>","<img src='/assets/arrow_forward_ios-black-18dp/1x/baseline_arrow_forward_ios_black_18dp.png'>"],
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true


}
}
