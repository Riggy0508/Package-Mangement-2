import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAddress } from '../PackXpreZ-Interfaces/address'
import { ICustomerDetails } from '../PackXpreZ-Interfaces/customer'
import { IFeedback } from '../PackXpreZ-Interfaces/feedback'
import { IPackage } from '../PackXpreZ-Interfaces/package'
import {IPincode } from '../PackXpreZ-Interfaces/pincode'
import { IBranchOfficer } from '../PackXpreZ-Interfaces/branchOfficer'
import {IRegistration} from '../PackXpreZ-Interfaces/Registration'
import { Local } from 'protractor/built/driverProviders';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PackXprezService {

  constructor(private _http: HttpClient) { }

  cCustAddAddress(email: string, building: string, street: string, local: string, city: string, state: string, pin: number): Observable<boolean> {
    var addObj: IAddress;

    addObj = {
      AddressId: 0,
      EmailId: email,
      buildingNo: building,
      streetName: street,
      locality: local,
      city: city,
      state: state,
      pincode: pin
    }
    console.log(addObj);
    var temp = this._http.post<boolean>('https://localhost:44365/api/Customer/AddAddress', addObj);

    return temp.pipe(catchError(this.errorHandler));
  }

  cCustRegistration(emailId: string, customerName: string, password: string, contactNo: string, buildingNo: string, streetName:string,locality:string,city:string,state:string,pincode:number): Observable<boolean> {
    var regObj: IRegistration;

    regObj = {
      EmailId: emailId,
      CustomerName: customerName,
      Password: password,
      ContactNo: contactNo,
      BuildingNo: buildingNo,
      StreetName: streetName,
      Locality: locality,
      City: city,
      State: state,
      Pincode: pincode
    }
    console.log(regObj);
    var temp = this._http.post<boolean>('https://localhost:44365/api/Customer/RegisterCustomer',regObj);
    return temp.pipe(catchError(this.errorHandler));
  }

  cCustEditProfile(emailId: string, customerName: string, contactNo :string): Observable<boolean> {
    var custObj: ICustomerDetails;

    custObj = {
      EmailId: emailId,
      Password: "",
      customerName: customerName,
      contactNo:contactNo
    }

    var temp = this._http.put<boolean>('https://localhost:44365/api/Customer/UpdateCustomerDetails',custObj);
    return temp.pipe(catchError(this.errorHandler));
  }

  cSchedulePackage(emailId:string, senderAddr: string, pickUpTimeSlot:number, receiverAddr: string, packageCost: number,packagingRequired: boolean, insurance: boolean,deliveryMode: string): Observable<boolean> {
    var pckObj: IPackage;

    pckObj = {
      transactionId: 0,
      EmailId: emailId,
      Awbnumber: "",
      SenderAddr: senderAddr,
      PickUpTimeSlot: pickUpTimeSlot,
      ReceiverAddr: receiverAddr,
      PackageCost: packageCost,
      PackagingRequired: packagingRequired,
      Insurance: insurance,
      DeliveryMode: deliveryMode,
      DeliveryStatus: "SCHEDULED",
      ScheduledDate: null,
      DeliveredDate: null
    }
    console.log(pckObj);
    var temp = this._http.post<boolean>('https://localhost:44365/api/Customer/SchedulePackage', pckObj);
    return temp.pipe(catchError(this.errorHandler));
  }

  cChangePassword(email: string, password: string): Observable<boolean> {

    var cusObj: ICustomerDetails;
    cusObj = {
      EmailId: email,
      Password: password,
      contactNo: "",
      customerName: ""
    }
    //var param = '?emailId=' + email + '&password=' + password;
    var temp = this._http.put<boolean>('https://localhost:44365/api/Customer/UpdatePassword', cusObj);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cRecall(awbnumber: string): Observable<boolean> {
    var param = '?AWBNumber=' + awbnumber;
    var RecallObj: IPackage;
    RecallObj = {
    
      Awbnumber: awbnumber,
      transactionId: 0,
      EmailId: "",
      SenderAddr: "",
      PickUpTimeSlot: 0,
      ReceiverAddr: "",
      PackageCost: 0,
      PackagingRequired: false,
      Insurance: false,
      DeliveryMode: "",
      DeliveryStatus: "",
      ScheduledDate: null,
      DeliveredDate: null
    }
    var temp = this._http.put<boolean>('https://localhost:44365/api/Customer/RecallPackage', RecallObj);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cGetCustomerDetails(emailId: string): Observable<ICustomerDetails> {

    var param = '?emailId=' + emailId;
    var temp = this._http.get<ICustomerDetails>('https://localhost:44365/api/customer/GetCustomerDetails' + param);
    return temp.pipe(catchError(this.errorHandler));

  }


  oGetPackageHistory(): Observable<IPackage[]> {
    var temp = this._http.get<IPackage[]>('https://localhost:44365/api/officer/GetPackageHistory');
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  oValidateLogin(emailId: string, password: string): Observable<boolean> {
    //var officerObj: IBranchOfficer;
    //officerObj = {
    //  OfficerEmail: email,
    //  Password: password,
    //  BranchName: null,
    //  OfficerName: null,
    //  Pincode: 0
    //}
    var param = '?emailId=' + emailId +'&password='+password;
    var temp = this._http.get<boolean>('https://localhost:44365/api/officer/ValidateLogin'+ param);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  oSchedulePackage(email: string, senderAddress: string, receiverAddress, pickUpTime: number, insurance: boolean, packageCost: number, deliveryMode: string, packagingRequired: boolean): Observable<boolean> {
    var packageDetails: IPackage;
    
    packageDetails = {
      transactionId: 0,
      Awbnumber: "",
      EmailId: email,
      SenderAddr: senderAddress,
      ReceiverAddr: receiverAddress,
      PickUpTimeSlot: pickUpTime,
      Insurance: insurance,
      PackageCost: packageCost,
      DeliveryMode: deliveryMode,
      PackagingRequired: packagingRequired,
      DeliveryStatus: "",
      ScheduledDate: null,
      DeliveredDate: null
    }
    console.log(packageDetails);
    var temp = this._http.post<boolean>('https://localhost:44365/api/officer/SchedulePackage', packageDetails);
    return temp.pipe(catchError(this.errorHandler));
  }

  oChangeStatus(transactionId: number, deliveryStatus: string): Observable<boolean> {
    var param = '?transactionId=' + transactionId + '&deliveryStatus=' + deliveryStatus;
    var temp = this._http.get<boolean>('https://localhost:44365/api/officer/ChangePackageStatus'+ param);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  oChangeComplaintStatus(FeedbackId: number): Observable<boolean> {
    var temp = this._http.get<boolean>('https://localhost:44365/api/officer/ChangeComplaintStatus?FeedbackId=' + FeedbackId);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }


  //Customer Services------------------------------------------------------////////

  cValidateLogin(emailId: string, password: string): Observable<boolean> {
    //var officerObj: IBranchOfficer;
    //officerObj = {
    //  OfficerEmail: email,
    //  Password: password,
    //  BranchName: null,
    //  OfficerName: null,
    //  Pincode: 0
    //}
    var param = '?emailId=' + emailId + '&password=' + password;
    var temp = this._http.get<boolean>('https://localhost:44365/api/customer/ValidateLogin' + param);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cGetPackageHistory(emailId: string): Observable<IPackage[]> {
    var temp = this._http.get<IPackage[]>('https://localhost:44365/api/customer/GetPackageHistoryByEmail?emailId=' + emailId);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cValiadatePincode(pincode:string): Observable<boolean> {
    var temp = this._http.get<boolean>('https://localhost:44365/api/customer/ValidatePinCode?pincode='+ pincode);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cRemoveAddress(addressId: number): Observable<boolean> {
    var temp = this._http.delete<boolean>('https://localhost:44365/api/customer/RemoveAddress?addressId=' + addressId);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cTrackPackage(awbNumber: string): Observable<IPackage> {
    var param = '?awbNumber=' + awbNumber;
    var temp = this._http.get<IPackage>('https://localhost:44365/api/customer/GetPackageHistoryByAWBNumber' + param);
    return temp.pipe(catchError(this.errorHandler));
  }

  cGetFeedback(): Observable<IFeedback[]> {
    var temp = this._http.get<IFeedback[]>('https://localhost:44365/api/customer/GetFeedback');
    return temp.pipe(catchError(this.errorHandler));
  }

  getDistanceByPincode(pin1: string, pin2: string): Observable<number> {
    var param = '?pin1=' + pin1 + '&pin2=' + pin2;
    var temp = this._http.get<number>('https://localhost:44365/api/customer/GetDistanceByPincode' + param);
    console.log(temp);
    return temp.pipe(catchError(this.errorHandler));

  }

  cAddFeedback(feedbackObj: IFeedback) {
    console.log("Inside service");
    var temp = this._http.post<boolean>('https://localhost:44365/api/customer/AddFeedback', feedbackObj);
    console.log("Temp value is "+temp);
    return temp.pipe(catchError(this.errorHandler));
  }

  cGetAdressDetails(emailId: string): Observable<IAddress[]> {
    var param = '?emailId=' + emailId;
    var temp = this._http.get<IAddress[]>('https://localhost:44365/api/customer/GetAddress' + param);
    return temp.pipe(catchError(this.errorHandler));
  }


  cGetAddressByAddresId(addressid: number): Observable<IAddress> {
    var param = "?addressId=" + addressid;
    var temp = this._http.get<IAddress>('https://localhost:44365/api/Customer/GetAddressByAddressId' + param);
    return temp.pipe(catchError(this.errorHandler));
  }


  cUpdateAddress(addressId: number, build: string, street: string, local: string, city: string, state: string, pin: number): Observable<boolean> {
    var addObj: IAddress;

    addObj = {
      AddressId: addressId,
      buildingNo: build,
      streetName: street,
      locality: local,
      city: city,
      state: state,
      pincode: pin,
      EmailId: ""
    }

    var temp = this._http.put<boolean>('https://localhost:44365/api/Customer/UpdateAddress',addObj);
    return temp.pipe(catchError(this.errorHandler));

  }



  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  } 
}
