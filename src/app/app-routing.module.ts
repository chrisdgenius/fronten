import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';


const routes: Routes = [
  //customer routes
  { path: '', component: CustomerListComponent },
  { path: 'customerslist', component: CustomerListComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  
  //Authentication route
  { path: '', pathMatch: 'full', redirectTo: 'log-in'},
  { path: 'log-in', component: SigninComponent},
  { path: 'register',component:SignupComponent},
  { path: 'user-profile/:_id', component: UserProfileComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
