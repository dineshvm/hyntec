import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceList = [
    {
      name: 'Annual Maintenance Contracts (AMC)',
      displayText:
        // tslint:disable-next-line:max-line-length
        'In today’s competitive era, quality is a prime factor. Quality output from any IT devices depends on its repeat performance. To get repeat performance;maintenance is a key factor.Our Annual Maintenance Contracts ensures you get the peak of performance all the time.',
      styles: {},
      routeLink: 'amc',
      cardClass: 'block-1'
    },
    {
      name: 'Desktop and User Support',
      displayText:
        // tslint:disable-next-line:max-line-length
        'We provide on-site expert, friendly technical support to business,home and home office users.Unlike repair shops, we have a strong emphasis on explanation,friendly communication,and training.',
      styles: {},
      routeLink: 'usersupport',
      cardClass: 'block-2'
    },
    {
      name: 'Network Installation',
      displayText:
        // tslint:disable-next-line:max-line-length
        'We offer network installation services that suit the client’s requirements.At Hyntec,under expert guidance of our skilled professionals,we provide quality of work that meets international standards.We understand each and every demand of yours and execute the computer networking needs.',
      styles: {},
      routeLink: 'network',
      cardClass: 'block-3'
    },
    {
      name: 'Data Backup and Restoration',

      displayText:
        // tslint:disable-next-line:max-line-length
        'Because data is the heart of the enterprise, it is crucial for you to protect it.Backing up files can protect against accidental loss of user data, database corruption,hardware failures, and even natural disasters.Our Data Backup and Restore services ensure that your data is accessible at any point of time.',
      styles: {},
      routeLink: 'databackup',
      cardClass: 'block-4'
    },
    {
      name: 'Desktops and Laptops Rental',
      displayText:
        // tslint:disable-next-line:max-line-length
        'We are providing the laptops and computers on rental basis. According to the client’ s need we do offer variety of collection when it comes to computers.You can avail this facility on daily or monthly basis.Affordable price and the quality make the Hyntec to stand on your choice.',
      styles: {},
      routeLink: 'rental',
      cardClass: 'block-5'
    },
    {
      name: 'Software and Hardware Installation',
      displayText:
        // tslint:disable-next-line:max-line-length
        'We have been designing and setting up IT landscapes for many start up and eshtablished organizations. We understand your needs better than anyone. We are just a call away, call us for all your software and hardware needs. We procure, install and configure them for you.',
      styles: {},
      routeLink: 'installation',
      cardClass: 'block-6'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
