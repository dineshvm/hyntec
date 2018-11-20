import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLoading = true;

  public contactForm: FormGroup;

  submitted = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  public buildForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', [Validators.required]],
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
}
