import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  constructor(private route: Router, private modalService: NgbModal) {}

  ngOnInit() {}
  open(content) {
    this.modalService.open(content, { windowClass: 'contact-form-modal' });
  }

  goToAboutUs() {
    this.route.navigate(['aboutus']);
  }
}
