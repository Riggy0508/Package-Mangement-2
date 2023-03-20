import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent implements OnInit {


  emailId: string;
  userRole: string;

  constructor(private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');

  }

  ngOnInit() {
    if (this.emailId == null) {
      alert('Please Login or Register to Proceed Further...')
      this._router.navigate(['']);
    }
    else if (this.userRole == 'admin') {
      alert('You are not Authorised to Proceed Further in Customer Session...')
      this._router.navigate(['']);
    }
  }

  logOut() {
    sessionStorage.removeItem('emailId');
    sessionStorage.removeItem('userRole');
    alert("Successfully Logged Out..!");

    this._router.navigate(['']);
  }


}
