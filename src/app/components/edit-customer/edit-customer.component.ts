import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

   customerId = '0';
    customerDetails: Customer = {
    _id: '',
    firstName: '',
    lastNames: '',
    phoneNumber: '',
    physicalAddress: '',
    emailAddress: '',
    age: 0,
    dob: '',
  };

  constructor(
    private customerservice: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data.id;

      this.customerservice
        .getCustomerById(this.customerId)
        .subscribe((customerData) => {
          this.customerDetails = customerData;
        });
    });
  }
 
  updateCustomer(form) {
    let updatedCustomer: Customer = {
      _id: form.value._id,
      firstName: form.value.firstName,
      lastNames: form.value.lastNames,
      age: form.value.age,
      phoneNumber: form.value.phoneNumber,
      emailAddress: form.value.emailAddress,
      dob: form.value.dob,
      physicalAddress: form.value.physicalAddress,
    };
    if (window.confirm('Do you want to update this customer')) {
      this.customerservice
        .updateCustomer(this.customerId, updatedCustomer)
        .subscribe((data) => {
          console.log('frome edit', updatedCustomer);
          (err) => console.error(err);

          this.router.navigate(['/customerslist']);
        });
    }
  }

}
