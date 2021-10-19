import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer;

  constructor(
    private route: Router,
    private customersservice: CustomersService
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customersservice.getCustomers().subscribe(
      (res) => (this.customerList = res),
      
    );
  }
 

  deleteCustomer(customer: Customer) {
    if (window.confirm('Are sure you want to delete this customer?')) {
      this.customersservice.deleteCustomer(customer._id).subscribe((res) => {
        this.getAllCustomers();
      });
    }
  }
 

}
