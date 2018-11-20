import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  isCurrentEnabled = true;
  public contactModalForm: FormGroup;
  services = [
    {
      id: 'Computer Repair & Services',
      name: 'Computer Repair & Services',
      checked: false
    },
    {
      id: 'Computer AMC Services',
      name: 'Computer AMC Services',
      checked: false
    }
  ];
  submitted = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  public buildForm() {
    const controls = this.fb.array(
      this.services.map(c => new FormControl(false))
    );
    const arr = this.fb.array(this.services.map(s => this.fb.control(false)), [
      Validators.required
    ]);
    this.contactModalForm = this.fb.group({
      serviceList: arr,
      serviceLocation: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.contactModalForm.controls;
  }
  get serviceArr() {
    return this.contactModalForm.get('serviceList') as FormArray;
  }
  onNextClick() {
    this.isCurrentEnabled = false;
  }
  onBackClick() {
    this.isCurrentEnabled = true;
  }
  onSubmit() {
    console.log(this.contactModalForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactModalForm.invalid) {
      return;
    }
    console.log(this.contactModalForm.value);
  }
}
