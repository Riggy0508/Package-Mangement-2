import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IFeedback } from '../../PackXpreZ-Interfaces/feedback';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hideCommon: boolean;
  hideCustomer: boolean;
  hideOfficer: boolean;
  hideLogin: boolean;
  hideFeedback: boolean;

  emailId: string;
  userRole: string;


  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');

    if (this.userRole != null) {
      this.hideLogin = true;
      if (this.userRole == "admin") {
        this.hideFeedback = true;
      }
      else {
        this.hideFeedback = false;
      }
    }
    else{
      this.hideLogin = false;
    }

    
  }

  ngOnInit() {
  }

  CustomerLoginPage() {
    this._router.navigate(['/customerlogin']);
  }

  AdminLoginPage() {
    this._router.navigate(['/officerlogin']);
  }

  trackPackage(form: NgForm) {
    console.log(form.value.awbnumber);
    if (form.value.awbnumber != "") {
      this._router.navigate(['/trackpackage', form.value.awbnumber])
    } else {
      alert("Please enter AWB Number to Proceed..!");
    }
  }

  CustomerRegistrationPage() {
    this._router.navigate(['/register']);
  }

  Postfeedback(form: NgForm) {
    var feedbackObj: IFeedback;
    feedbackObj = {
      emailId:form.value.emailId,
      feedbackId: 0,
      feedBackType: form.value.feedbackType,
      feedBackText: form.value.feedbacktext,
      actionTaken: "Action Pending"
    }
    console.log(form.value.emailId);
    console.log(form.value.feedbackType);
    //console.log(form.value.selectedValue);
    console.log(form.value.feedbacktext);
    console.log("Inside Postfeedback method");

    this._service.cAddFeedback(feedbackObj).subscribe(
      success => {
        if (success) {
          console.log("returns true");
          this.ngOnInit();
        }
        else {
          console.log("returns false");
        }
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("Inside console fetch");
      }
    );

  }


  goToDashBoard() {
    if (this.userRole == "customer") {
      this._router.navigate(['/getPackageHistory']);
    } else if (this.userRole == "admin") {
      this._router.navigate(['/officerhistory']);
    } else {
      this._router.navigate(['']);
    }

  }

  logOut() {
    sessionStorage.removeItem('emailId');
    sessionStorage.removeItem('userRole');
    //alert("Successfully Logged Out..!");
    this.ngOnInit();
    this._router.navigate(['/home']);


  }


}
