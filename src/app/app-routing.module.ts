import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

import { SettingComponent } from './components/setting/setting.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';


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
  { path: 'user-profile/:_id', component: UserProfileComponent},
  //Setting route
  {path: 'setting', component: SettingComponent},
  { path: 'loan', loadChildren: () => import('./loan/loan.module').then(m => m.LoanModule) },
// dashboard
{path: 'dashboard', component:DashboardComponent},




  //page not found alway at the buttom of every other component
  {path: '**', component: PagenotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
