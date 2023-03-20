import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-pincode-availability',
  templateUrl: './check-pincode-availability.component.html',
  styleUrls: ['./check-pincode-availability.component.css']
})
export class CheckPincodeAvailabilityComponent implements OnInit {

  emailId: string;
  userRole: string;


  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');

  }

  ngOnInit() {
  }

  CheckPincodeMethod(form: NgForm) {
    console.log(form.value.pin1);
    console.log(form.value.pin2);

    this._service.getDistanceByPincode(form.value.pin1, form.value.pin2).subscribe(
      succ => {
        if (succ > 0) {
          if (this.userRole == "customer") {
            this._router.navigate(['/cSchedulePackage', succ, form.value.pin1, form.value.pin2]);
          } else {
            this._router.navigate(['/oSchedulePackage', succ, form.value.pin1, form.value.pin2]);
          }
        }
        else {
          alert("Service Not Available");
        }
      },

      err => { console.log(err); },

      () => { console.log("Check Pincode Available Method");}

    );
  }

  goBack() {
    if (this.userRole == "customer") {
      this._router.navigate(['/getPackageHistory']);
    } else {
      this._router.navigate(['/officerhistory']);
    }
  }

}
