import { Component, OnInit } from '@angular/core';
import { IAddress } from '../../PackXpreZ-Interfaces/address';
import { Router } from '@angular/router';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';


@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {

  addressList: IAddress[];
  emailId: string;
  userRole: string;
  showMsgDiv: boolean = false;

  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');
  }

  ngOnInit() {
    if (this.emailId == null) {
      alert('Please login to view Your Package History..!')
      this._router.navigate(['/customerlogin']);
    }
    else {
      this.getAddressDetails();
    }
  }

  getAddressDetails() {
    console.log(this.emailId);
    this._service.cGetAdressDetails(this.emailId).subscribe(
      success => {
        if (success == null) {
          this.addressList = null;
          this.showMsgDiv = true;
        }          
        else {
            this.addressList = success;
            this.showMsgDiv = false;
          }        
      },
        error => {
          this.addressList = null;
        console.log(error);
      },
      () => {
        console.log("Method executed");
      }
    );
  }

  RemoveAddress(addressId: number) {


    this._service.cRemoveAddress(addressId).subscribe(
      success => {
        if (success) {
          console.log("true");
          this.ngOnInit();
        }
        else {
          console.log("Not Deleted");
        }
      },
      error => { console.log(error); },
      () => { console.log("Remove Address"); }
    );
  }

  editAddress(addressId: number) {
    this._router.navigate(['editaddress', addressId]);
  }

}
