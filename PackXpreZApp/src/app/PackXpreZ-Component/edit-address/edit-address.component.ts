import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service'
import { Router, ActivatedRoute } from '@angular/router';
import { IAddress } from '../../PackXpreZ-Interfaces/address';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  addID: number;
  addOBJ: IAddress;
  build: string;
  street: string;
  local: string;
  city: string;
  state: string;
  pin: number;
  emailID: string;

  constructor(private _service: PackXprezService, private _router: Router, private _route: ActivatedRoute) {
    this.emailID = sessionStorage.getItem('emailId');
    this.addID = this._route.snapshot.params['addressid'];
    console.log(this.addID);
  }

  ngOnInit() {
    this.getAddressOBJ();
  }

  custEditAddress(form: NgForm) {
    this._service.cUpdateAddress(this.addID, form.value.building, form.value.street, form.value.local, form.value.city, form.value.state, form.value.pin).subscribe(
      succ => { console.log(succ);
        alert("Address Edited Successfully")
        this._router.navigate(['/getPackageHistory']);
      },
      err => { console.log(err); },
      () => {
        console.log("Customer Edit Address Method");
      }
    );
  }

  getAddressOBJ() {
    this._service.cGetAddressByAddresId(this.addID).subscribe(
      succ => {
        console.log(succ);
        if (succ != null) {
          this.addOBJ = succ;
          this.build = this.addOBJ.buildingNo;
          this.street = this.addOBJ.streetName;
          this.local = this.addOBJ.locality;
          this.state = this.addOBJ.state;
          this.city = this.addOBJ.city;
          this.pin = this.addOBJ.pincode;
          console.log(this.pin,this.city,this.state,this.build);
        }
      },
      err => { console.log(err); },

      () => { console.log("Get Address Obj Method"); }
    );

  }

  goBack() {
    this._router.navigate(['/getPackageHistory']);
  }
}
