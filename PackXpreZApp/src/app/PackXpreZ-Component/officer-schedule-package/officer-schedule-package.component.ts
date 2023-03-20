import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-officer-schedule-package',
  templateUrl: './officer-schedule-package.component.html',
  styleUrls: ['./officer-schedule-package.component.css']
})
export class OfficerSchedulePackageComponent implements OnInit {

  emailID: string;
  cost: number = 0;
  distance: number;
  volume: number = 0;
  insurance: boolean;
  time: number;
  checkPincode: boolean;
  senderPincode: number;
  recieverPincode: number;
  shipmentMode: string;
  packaging: boolean;
  length: number = 0;
  breadth: number = 0;
  width: number = 0;
  weight: number = 0;
  totalPrice: number = 0;

  constructor(private _service: PackXprezService, private _route: ActivatedRoute, private _router: Router) {
    this.distance = this._route.snapshot.params['distance'];
    this.senderPincode = this._route.snapshot.params['senderPincode']
    this.recieverPincode = this._route.snapshot.params['recieverPincode']
    this.volume = 0;
  }

  ngOnInit() {
  }

  offSchedulePackage(form: NgForm) {
    console.log("TheForm Value:", form.value);

    this.emailID = form.value.mail;

    if (parseInt(form.value.estCost) >= 1000)
      this.insurance = true;
    else
      this.insurance = false;

    this.time = parseInt(form.value.timeslot)

    this.volume = form.value.length * form.value.breadth * form.value.width;

    this.cost = this.distance * 7;
    this.cost = this.cost + this.volume * 0.5;
    this.cost = this.cost + form.value.weight * 0.75;

    if (form.value.mode == "OVERNIGHT") {
      this.cost = this.cost + 500;
    }
    else if (form.value.mode == "EXPRESS") {
      this.cost = this.cost + 100;
    }

    if (form.value.packaging) {
      this.cost + this.cost + 100;
    }

    this._service.oSchedulePackage(this.emailID, form.value.senaddr, form.value.recaddr, this.time, this.insurance, this.cost, form.value.mode, form.value.packaging).subscribe(

      succ => {
        console.log(succ);
        alert("Package Scheduled Successfully..!");
        this._router.navigate(['/officerhistory']);
      },
      err => {
        console.log(err);
        alert("Package Scheduling Failed, Try Again..!");
      },
      () => { console.log("Officer Schedule Package Method"); }
    );
  }


  calculatePrice() {

    this.volume = this.length * this.breadth * this.width;
    this.cost = this.distance * 0.7;
    this.cost = this.cost + this.volume * 5;
    this.cost = this.cost + this.weight * 7;

    if (this.shipmentMode == "OVERNIGHT") {
      this.cost = this.cost + 500;
    }
    else if (this.shipmentMode == "EXPRESS") {
      this.cost = this.cost + 100;
    }
    console.log(this.packaging);
    if (this.packaging) {
      this.cost = this.cost + 100;
    }
    this.totalPrice = this.cost;
    console.log(this.cost);

  }



  goBack() {
    this._router.navigate(['/officerhistory']);
  }

}
