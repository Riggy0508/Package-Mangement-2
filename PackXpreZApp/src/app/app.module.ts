import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { routing } from '../app.routing';
import { AppComponent } from './app.component';
import { PackXprezService } from '../app/PackXpreZ-Services/pack-xprez.service'
import { HomeComponent } from './PackXpreZ-Component/home/home.component';
import { CustLoginComponent } from './PackXpreZ-Component/cust-login/cust-login.component';
import { AdminLoginComponent } from './PackXpreZ-Component/admin-login/admin-login.component';
import { ViewPackageComponent } from './PackXpreZ-Component/view-package/view-package.component';
import { GetPackageHistoryComponent } from './PackXpreZ-Component/get-package-history/get-package-history.component';
import { RegisterCustomerComponent } from './PackXpreZ-Component/register-customer/register-customer.component';
import { AddAddressComponent } from './PackXpreZ-Component/add-address/add-address.component';
import { EditProfileComponent } from './PackXpreZ-Component/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './PackXpreZ-Component/change-password/change-password.component';
import { OfficerGetHistoryComponent } from './PackXpreZ-Component/officer-get-history/officer-get-history.component';
import { ViewAddressComponent } from './PackXpreZ-Component/view-address/view-address.component';
import { CommonLayoutComponent } from './PackXpreZ-Component/common-layout/common-layout.component';
import { CustomerLayoutComponent } from './PackXpreZ-Component/customer-layout/customer-layout.component';
import { OfficerLayoutComponent } from './PackXpreZ-Component/officer-layout/officer-layout.component';
import { OfficerSchedulePackageComponent } from './PackXpreZ-Component/officer-schedule-package/officer-schedule-package.component'
import { CustomerSchedulePackageComponent } from './PackXpreZ-Component/customer-schedule-package/customer-schedule-package.component';
//import { ScrollUpComponent } from './PackXpreZ-Component/scroll-up/scroll-up.component';
import { GetComplaintsOfficerComponent } from './PackXpreZ-Component/get-complaints-officer/get-complaints-officer.component';
import { CheckPincodeAvailabilityComponent } from './PackXpreZ-Component/check-pincode-availability/check-pincode-availability.component';
import { EditAddressComponent } from './PackXpreZ-Component/edit-address/edit-address.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustLoginComponent,
    AdminLoginComponent,
    ViewPackageComponent,
    GetPackageHistoryComponent,
    RegisterCustomerComponent,
    AddAddressComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    OfficerGetHistoryComponent,
    ViewAddressComponent,
    CommonLayoutComponent,
    CustomerLayoutComponent,
    OfficerLayoutComponent,
    OfficerSchedulePackageComponent,
    CustomerSchedulePackageComponent,
    //ScrollUpComponent,
    GetComplaintsOfficerComponent,
    CheckPincodeAvailabilityComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [PackXprezService],
  bootstrap: [AppComponent]
})
export class AppModule { }
