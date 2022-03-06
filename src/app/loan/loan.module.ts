import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';


@NgModule({
  declarations: [
    LoanComponent,
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
