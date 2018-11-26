import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  open(content) {
    this.modalService.open(content, { windowClass: 'contact-form-modal' });
  }
}
