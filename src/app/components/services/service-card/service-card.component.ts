import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  serviceList = [
    {
      name: 'Annual Maintenance Contracts (AMC)',
      routeLink: 'amc',
      iconClass: 'fa-cogs'
    },
    {
      name: 'Desktop and User Support',
      routeLink: 'usersupport',
      iconClass: 'fa-briefcase'
    },
    {
      name: 'Network Installation',
      routeLink: 'network',
      iconClass: 'fa-rss'
    },
    {
      name: 'Data Backup and Restoration',
      routeLink: 'databackup',
      iconClass: 'fa-database'
    },
    {
      name: 'Desktops and Laptops Rental',
      routeLink: 'rental',
      iconClass: 'fa-laptop'
    },
    {
      name: 'Software and Hardware Installation',
      routeLink: 'installation',
      iconClass: 'fa-desktop'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
