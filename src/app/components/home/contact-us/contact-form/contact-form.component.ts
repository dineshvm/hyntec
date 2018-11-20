import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;
  submitted = false;
  constructor(public fb: FormBuilder) {}

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
  onSubmit() {
    console.log(this.contactForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm.value);
  }

  // initiate component
  public ngOnInit() {
    this.buildForm();
  }
}
