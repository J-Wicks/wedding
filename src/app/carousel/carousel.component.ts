import { Component, OnInit } from '@angular/core';
import {Image} from '../image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  IMAGES: Image[] = [
    {url: 'https://picsum.photos/200', title: 'image1'},
    {url: 'https://picsum.photos/200', title: 'image2'},
    {url: 'https://picsum.photos/200', title: 'image3'}
  ]
  public images = this.IMAGES;


  ngOnInit() {
  }

}
