import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {


  constructor(private _service: PackXprezService, private _router: Router) {
  }

  ngOnInit() {

  }

  custRegistrationForm(form: NgForm) {
    console.log("In");
    if (form.value.pass == form.value.pass2) {


      this._service.cCustRegistration(form.value.emailId, form.value.username, form.value.pass, form.value.contactno, form.value.Building, form.value.street, form.value.Locality, form.value.city, form.value.state, form.value.Pincode).subscribe(
        succ => {
          console.log(succ);
          if (succ) {
            alert("Registration Successful");
            this._router.navigate(['/customerlogin']);
          }
          else {
            alert("Something went wrong... Try Again..");
          }
        },
        err => {
          console.log(err);
        },
        () => { console.log("Customer Registration Method"); }

      );
    }
    else {
      alert("Passwords do not Match");
    }
  }

  RedirectHome() {
    this._router.navigate(['']);
  }

}
