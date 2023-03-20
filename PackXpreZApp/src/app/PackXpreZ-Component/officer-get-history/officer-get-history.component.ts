import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { IPackage } from '../../PackXpreZ-Interfaces/package';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-officer-get-history',
  templateUrl: './officer-get-history.component.html',
  styleUrls: ['./officer-get-history.component.css']
})
export class OfficerGetHistoryComponent implements OnInit {

  packageList: IPackage[];
  showMsgDiv: boolean;
  pickUp: boolean;
  delivered: boolean;
  notDelivered: boolean;

  //showPickUpBtn: boolean;
  //showDeliveryBtn: boolean;
  

  constructor(private _service: PackXprezService, private _router: Router, private _activeRoute: ActivatedRoute) { }

  ngOnInit() {    
    this._service.oGetPackageHistory().subscribe(
      success => {
        if (success != null) {                    
          this.packageList = success;                  
          this.showMsgDiv = false;                   
        }
        else {
          this.packageList = null;
          this.showMsgDiv = true;
        }
      },
      error => { console.log(error); },
      () => { console.log("Successfully Fetched"); }
    );

  }

  sPickUp(packageDetail: IPackage) {
    console.log("Initiated");
    //if (packageDetail.DeliveryStatus == "SCHEDULED") {
    this._service.oChangeStatus(packageDetail.transactionId, "IN-TRANSIT").subscribe(
        success => {
          if (success) {
            console.log("InTransit Mode");
            this.ngOnInit();
          }
          else {
            alert("Error occured");
          }
        },
        error => { console.log(error); },
        () => { console.log("Successfully Fetched"); }
      );
    //}

  }

  sDeliver(packageDetail: IPackage) {
    console.log("Initiated");
    //if (packageDetail.DeliveryStatus == "SCHEDULED") {
    this._service.oChangeStatus(packageDetail.transactionId, "DELIVERED").subscribe(
        success => {
          if (success) {
            console.log("InTransit Mode");
            this.ngOnInit();
          }
          else {
            alert("Error occured");
          }
        },
        error => { console.log(error); },
        () => { console.log("Successfully Fetched"); }
      );
    }

  //}

  sFailed(packageDetail: IPackage) {
    console.log("Initiated");
    //if (packageDetail.DeliveryStatus == "SCHEDULED") {
    this._service.oChangeStatus(packageDetail.transactionId, "FAILED").subscribe(
      success => {
        if (success) {
          console.log("InTransit Mode");
          this.ngOnInit();
        }
        else {
          alert("Error occured");
        }
      },
      error => { console.log(error); },
      () => { console.log("Successfully Fetched"); }
    );
  }

  //}


}
