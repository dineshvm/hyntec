import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  isCurrentEnabled = true;
  public contactModalForm: FormGroup;
  isSubmitting = false;
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

  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

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
    this.submitted = false;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactModalForm.invalid) {
      return;
    } else {
      const tempObj = { ...this.contactModalForm.value };
      tempObj.serviceList = this.getFormattedData(tempObj.serviceList);
      this.isSubmitting = true;
      this.dataService.postMessage(tempObj).subscribe(
        resp => {
          this.isSubmitting = false;
          this.submitted = false;
          this.contactModalForm.reset();
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
  getFormattedData(list) {
    const tempArr = [];
    list.map((item, i) => {
      if (item) {
        tempArr.push(this.services[i].id);
      }
    });
    return tempArr.join(',');
  }
}
