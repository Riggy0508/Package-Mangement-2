import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ICustomerDetails } from '../../PackXpreZ-Interfaces/customer'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  emailTemp: string;
  cusObj: ICustomerDetails;
  userName: string;
  contact: string;

  constructor(private _service: PackXprezService, private _router: Router) {
    this.emailTemp = sessionStorage.getItem('emailId')
    //this.emailTemp = "thunder@gmail.com"
    console.log(this.emailTemp);


    this.cGetCustomerDetails();
    console.log(this.userName);
  }

  ngOnInit() {

  }

  editCustomerProfile(form: NgForm) {
    this._service.cCustEditProfile(this.emailTemp, form.value.username, form.value.contactno).subscribe(
      succ => {
        console.log(succ);
        alert("Profile Updated Successfully");
        this._router.navigate(['/getPackageHistory']);
      },
      err => {
        console.log(err);
        alert("Profile Updation Failed,Try Again..");
        this.ngOnInit();
      },
      () => { console.log("Edit Customer Profile Method");}
    );
  }

  cGetCustomerDetails() {
    this._service.cGetCustomerDetails(this.emailTemp).subscribe(
      succ => {
        console.log(succ);
        this.cusObj = succ
        this.userName = this.cusObj.customerName;
        this.contact = this.cusObj.contactNo;
      },
      err => { console.log(err);},
      () => { }
    );
  }

  //goBack() {
  //  this._router.navigate(['/getPackageHistory']);
  //}

}
