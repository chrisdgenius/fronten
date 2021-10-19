

import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersUrl = 'http://localhost:9000/customers';

  constructor(private http: HttpClient) {}

  createCustomer(payload: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.customersUrl}`, payload);
  }

  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl);
  }

  getCustomerById(_id): Observable<Customer> {
    const customerUrl = 'http://localhost:9000/customers/' + _id;
    return this.http.get<Customer>(customerUrl);
  }

  updateCustomer(_id: any, customer: Customer): Observable<Customer> {
    return this.http
      .patch<Customer>(`${this.customersUrl}/${customer._id}`, customer)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  deleteCustomer(_id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.customersUrl}/${_id}`);
  }

}


