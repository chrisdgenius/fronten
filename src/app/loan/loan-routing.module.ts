import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanComponent } from './loan.component';

const routes: Routes = [
  { path: '', component: LoanComponent },
  { path: 'application', component: LoanApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
