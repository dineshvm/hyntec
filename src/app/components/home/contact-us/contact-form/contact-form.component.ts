import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { DataService } from '../../../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  public buildForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  // initiate component
  public ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      this.isSubmitting = true;
      this.dataService.postMessage(this.contactForm.value).subscribe(
        resp => {
          this.isSubmitting = false;
          this.contactForm.reset();
          this.toastr.success('Message Sent Successfully');
        },
        error => {
          this.isSubmitting = false;
          console.log(error);
          this.toastr.error(`Something Error Occured.\n Please try again`);
        }
      );
    }
  }
}
