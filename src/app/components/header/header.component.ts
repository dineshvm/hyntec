import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public isNavbarCollapsed = true;
  serviceList = [
    {
      name: 'Annual Maintenance Contracts (AMC)',
      routeLink: 'amc'
    },
    {
      name: 'Desktop and User Support',
      routeLink: 'usersupport'
    },
    {
      name: 'Network Installation',
      routeLink: 'network'
    },
    {
      name: 'Data Backup and Restoration',
      routeLink: 'databackup'
    },
    {
      name: 'Desktops and Laptops Rental',
      routeLink: 'rental'
    },
    {
      name: 'Software and Hardware Installation',
      routeLink: 'installation'
    }
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  open(content) {
    this.modalService.open(content, { windowClass: 'contact-form-modal' });
  }
}
