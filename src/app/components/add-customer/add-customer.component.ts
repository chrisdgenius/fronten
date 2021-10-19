import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomersService } from 'src/app/services/customers.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl:'./add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  errorMsg = '';
  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
     private customerservice: CustomersService,
     private router:Router

  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      _id: [, Validators.required],
      firstName: ['', Validators.required],
      lastNames: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      age: [, Validators.required],
      dob: ['', Validators.required],
      
    });
  }

  createCustomer() {

    const newCustomer: Customer = {
      _id: this.customerForm.get('_id').value,
      firstName: this.customerForm.get('firstName').value,
      lastNames: this.customerForm.get('lastNames').value,
      phoneNumber: this.customerForm.get('phoneNumber').value,
      emailAddress: this.customerForm.get('emailAddress').value,
      physicalAddress: this.customerForm.get('physicalAddress').value,
      age: this.customerForm.get('age').value,
      dob: this.customerForm.get('dob').value,
     
    };
    this.customerservice.createCustomer(newCustomer).subscribe(
      res => {
        this.router.navigate(['/customerslist'])
      // error => this.errorMsg = error.statusText
       
    
      }
    )

 
    this.customerForm.reset();
  }
}