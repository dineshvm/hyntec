import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLoading = true;
  isSubmitting = false;
  public contactForm: FormGroup;

  submitted = false;

  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

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
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      this.isSubmitting = true;
      this.dataService.postMessage(this.contactForm.value).subscribe(
        resp => {
          this.isSubmitting = false;
          this.submitted = false;
          this.contactForm.reset();
          this.toastr.success('Message Sent Successfully');
        },
        error => {
          this.isSubmitting = false;
          this.submitted = false;
          this.toastr.error(`Something Error Occured.\n Please try again`);
        }
      );
    }
  }
}
