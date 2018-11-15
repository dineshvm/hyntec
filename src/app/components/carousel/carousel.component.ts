import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    'assets/images/amc.jpg',
    'assets/images/laptop.jpg',
    'assets/images/services.jpg',
    'assets/images/services2.jpg'
  ];
  constructor() {}

  ngOnInit() {}
}
