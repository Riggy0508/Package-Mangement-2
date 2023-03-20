import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './app/PackXpreZ-Component/home/home.component';
import { CustLoginComponent } from './app/PackXpreZ-Component/cust-login/cust-login.component';
import { AdminLoginComponent } from './app/PackXpreZ-Component/admin-login/admin-login.component';
import { ViewPackageComponent } from './app/PackXpreZ-Component/view-package/view-package.component';
import { GetPackageHistoryComponent } from './app/PackXpreZ-Component/get-package-history/get-package-history.component';
import { RegisterCustomerComponent } from './app/PackXpreZ-Component/register-customer/register-customer.component';
import { AddAddressComponent } from './app/PackXpreZ-Component/add-address/add-address.component';
import { EditProfileComponent } from './app/PackXpreZ-Component/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './app/PackXpreZ-Component/change-password/change-password.component';
import { OfficerGetHistoryComponent } from './app/PackXpreZ-Component/officer-get-history/officer-get-history.component';
import { ViewAddressComponent } from './app/PackXpreZ-Component/view-address/view-address.component';
import { OfficerSchedulePackageComponent } from './app/PackXpreZ-Component/officer-schedule-package/officer-schedule-package.component';
import { CustomerSchedulePackageComponent } from './app/PackXpreZ-Component/customer-schedule-package/customer-schedule-package.component';
import { GetComplaintsOfficerComponent } from './app/PackXpreZ-Component/get-complaints-officer/get-complaints-officer.component';
import { CheckPincodeAvailabilityComponent } from './app/PackXpreZ-Component/check-pincode-availability/check-pincode-availability.component';
import { EditAddressComponent } from './app/PackXpreZ-Component/edit-address/edit-address.component';
//import { CommonLayoutComponent } from './app/PackXpreZ-Component/common-layout/common-layout.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customerlogin', component: CustLoginComponent },
  { path: 'officerlogin', component: AdminLoginComponent },
  { path: 'trackpackage/:awbnumber', component: ViewPackageComponent },
  { path: 'getPackageHistory', component: GetPackageHistoryComponent },
  { path: 'register', component: RegisterCustomerComponent },
  { path: 'addaddress', component: AddAddressComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'officerhistory', component: OfficerGetHistoryComponent },
  { path: 'viewaddress', component: ViewAddressComponent },
  { path: 'oSchedulePackage/:distance/:senderPincode/:recieverPincode', component: OfficerSchedulePackageComponent },
  { path: 'cSchedulePackage/:distance/:senderPincode/:recieverPincode', component: CustomerSchedulePackageComponent },
  { path: 'getComplaints', component: GetComplaintsOfficerComponent },
  { path: 'checkservice', component: CheckPincodeAvailabilityComponent },
  { path: 'editaddress/:addressid', component: EditAddressComponent },

  { path: '**', component: HomeComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
