import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Session } from 'protractor';


@Component({
  selector: 'app-customer-schedule-package',
  template: `
    <app-check-pincode-availability [checkPincode]="checkPincode"></app-check-pincode-availability>
  `,  templateUrl: './customer-schedule-package.component.html',
  styleUrls: ['./customer-schedule-package.component.css']
})
export class CustomerSchedulePackageComponent implements OnInit {

  emailID: string;
  cost: number = 0;
  distance: number;
  volume: number=0;
  insurance: boolean;
  time: number;
  checkPincode: boolean;
  senderPincode: number;
  recieverPincode: number;
  shipmentMode: string;
  packaging: boolean;
  length: number=0;
  breadth: number=0;
  width: number=0;
  weight: number = 0;
  totalPrice: number = 0;

  constructor(private _service: PackXprezService, private _router: Router, private _route: ActivatedRoute) {
    this.volume = 0;
    this.emailID = sessionStorage.getItem('emailId');
    this.distance = this._route.snapshot.params['distance']
    this.senderPincode = this._route.snapshot.params['senderPincode']
    this.recieverPincode = this._route.snapshot.params['recieverPincode']
    console.log(this.emailID);
  }

  ngOnInit() {
    this.checkPincode = false;
  }

  custSchedulePackage(form: NgForm) {
    console.log(form);

    if (parseInt(form.value.estCost) >= 1000)
      this.insurance = true;
    else
      this.insurance = false;

    this.time = parseInt(form.value.timeslot)

    this.volume = form.value.length * form.value.breadth * form.value.width;

    this.cost = this.distance * 7;
    this.cost = this.cost + this.volume * 5;
    this.cost = this.cost + form.value.weight * 7;

    if (form.value.mode == "OVERNIGHT") {
      this.cost = this.cost + 500;
    }
    else if (form.value.mode == "EXPRESS") {
      this.cost = this.cost + 100;
    }

    if (form.value.packaging) {
      this.cost + this.cost + 100;
    }
    console.log(this.cost);
    this._service.cSchedulePackage(this.emailID, form.value.senaddr, this.time, form.value.recaddr, this.cost, form.value.packaging, this.insurance, form.value.mode).subscribe(

      succ => {
        console.log(succ);
        this._router.navigate(['/getPackageHistory']);
      },
      err => {
        console.log(err);
      },
      () => { console.log("Customer Schedule Package Method"); }

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
    this._router.navigate(['/getPackageHistory']);
  }

}
