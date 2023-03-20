import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  showDiv: boolean = false;
  errorMsg: string;
  userRole: string = "admin";
  constructor(private _service: PackXprezService, private _router: Router) { }

  ngOnInit() {

  }
  AdminLoginMethod(form: NgForm) {
    console.log("Inside method");
    this._service.oValidateLogin(form.value.emailId, form.value.pass).subscribe(
      success => {
        if (success) {
          sessionStorage.setItem('emailId', form.value.emailId);
          sessionStorage.setItem('userRole', this.userRole);
          console.log("Correct credentials");
          this._router.navigate(['/officerhistory']);
        }
        else {
          this.showDiv = true;
          this.errorMsg = "Invalid Credentials";
        }
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("AdminLogin Method success");
      }
    );
  }

}
