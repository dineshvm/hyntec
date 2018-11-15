import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  // tslint:disable-next-line:no-inferrable-types
  lat: number = 12.8952263;
  // tslint:disable-next-line:no-inferrable-types
  lng: number = 77.6109379;

  constructor() {}

  ngOnInit() {}
}
