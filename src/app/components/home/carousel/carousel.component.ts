import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    { url: 'assets/images/services.jpg', name: '' },
    { url: 'assets/images/services1.jpg', name: '' },
    { url: 'assets/images/services2.jpg', name: '' },
    { url: 'assets/images/services3.jpg', name: '' },
    { url: 'assets/images/services4.jpg', name: '' },
    { url: 'assets/images/services5.jpg', name: '' },
    { url: 'assets/images/services6.jpg', name: '' },
    { url: 'assets/images/services7.jpg', name: '' },
    { url: 'assets/images/services8.jpg', name: '' },
    { url: 'assets/images/services9.jpg', name: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
