import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  emailID: string;

  constructor(private _service: PackXprezService, private _router: Router) {
    //this.emailID = "john@gmail.com";
    this.emailID = sessionStorage.getItem('emailId');
  }

  ngOnInit() {
  }

  custAddAddress(form: NgForm) {
    console.log(form);
    this._service.cCustAddAddress(this.emailID, form.value.building, form.value.street, form.value.local, form.value.city, form.value.state, form.value.pin).subscribe(

      succ => {
        console.log(succ);
        alert("Address Added Successfully");
        this._router.navigate(['\getPackageHistory']);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("Customer Add Address Method");
      }

    );
  }

  goBack() {
    this._router.navigate(['/getPackageHistory']);
  }

}
