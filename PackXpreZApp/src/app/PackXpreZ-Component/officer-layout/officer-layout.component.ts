import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer-layout',
  templateUrl: './officer-layout.component.html',
  styleUrls: ['./officer-layout.component.css']
})
export class OfficerLayoutComponent implements OnInit {
  emailId: string;
  userRole: string;

  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');

  }

  ngOnInit() {
    if (this.emailId == null) {
      alert('Please Login or Register to Proceed Further...')
      this._router.navigate(['']);
    }
    else if (this.userRole == 'customer') {
      alert('You are not Authorised to Proceed Further...')
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
