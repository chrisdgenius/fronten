import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from './componets/nav/nav.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthInterceptor } from './auth/authconfig.interceptor';
import { SettingComponent } from './components/setting/setting.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ChartsModule } from 'ng2-charts';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerListComponent,
    SignupComponent,
    SigninComponent,
    UserProfileComponent,
    SettingComponent,
    PagenotfoundComponent,
    StatisticsComponent,
    DashboardComponent
    
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
