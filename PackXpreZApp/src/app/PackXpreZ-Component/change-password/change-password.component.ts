import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  emailID: string;

  constructor(private _service: PackXprezService, private _router: Router) {
    this.emailID = sessionStorage.getItem('emailId')
  }

  ngOnInit() {
  }

  custChangePassword(form: NgForm) {
    if (form.value.pass == form.value.pass2) {
      this._service.cChangePassword(this.emailID, form.value.pass).subscribe(
        succ => {

          console.log(succ);
          this._router.navigate(['/customerlogin']);
        },
        err => {
          console.log(err);
        },
        () => { console.log("Customer Change Password Method"); }
      );
    }
    else
      alert("Passwords Do Not Match");

  }

  goBack() {
    this._router.navigate(['/getPackageHistory']);
  }
}
