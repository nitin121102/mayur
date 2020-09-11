import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = ['https://storage.googleapis.com/web-assets/Coronavirus-2020/Shashank-Joshi/Shashank-03.jpg', 'https://storage.googleapis.com/web-assets/key-take-away/AKPancholia.jpg', 'https://storage.googleapis.com/web-assets/Coronavirus-2020/Sudhir-Bandari-with-Anil-Pareek/Hemanth%20and%20Anil%20Pareek%20LandScape/Hemanth%20and%20Anil%20Pareek%20LandScape-large.jpg'];
  }

}
