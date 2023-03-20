import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit {

  showDiv: boolean = false;
  errorMsg: string;
  userRole: string = "customer";
  constructor(private _service: PackXprezService, private _router: Router) { }

  ngOnInit() {
  }

  CustomerLoginMethod(form: NgForm) {
    console.log("Inside method");
    this._service.cValidateLogin(form.value.emailId, form.value.pass).subscribe(      
      success => {
        if (success) {
          sessionStorage.setItem('emailId', form.value.emailId);
          sessionStorage.setItem('userRole', this.userRole);
          console.log("Correct credentials");
          this._router.navigate(['/getPackageHistory']);
        }
        else {
          this.showDiv = true;
          this.errorMsg="Invalid Credentials";
        }
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("CustomerLogin Method success");
      }
    );
  }

}
