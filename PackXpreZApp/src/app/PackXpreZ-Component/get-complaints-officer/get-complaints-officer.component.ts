import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { IFeedback } from '../../PackXpreZ-Interfaces/feedback';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-get-complaints-officer',
  templateUrl: './get-complaints-officer.component.html',
  styleUrls: ['./get-complaints-officer.component.css']
})
export class GetComplaintsOfficerComponent implements OnInit {
  feedback: IFeedback[];
  complaints: IFeedback[];
  emailId: string;
  userRole: string;

  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');
    this.emailId = 'john@gmail.com';

  }
  ngOnInit() {
    this.getComplaints();

  }

  getComplaints() {
    this._service.cGetFeedback().subscribe(
      success => {
        this.feedback = success;
        if (this.feedback != null) {

          this.complaints = this.feedback.filter(value => value.feedBackType == "Complaint");
          console.log(this.complaints);
       }

      },
      error => { console.log(error); },
      () => { console.log("Complaints Successfully Fetched"); }
    );

  }

  changeComplaintStatus(feedbackId: number) {
    this._service.oChangeComplaintStatus(feedbackId).subscribe(
      success => {
        this.ngOnInit();
        console.log(success);

      },
      error => { console.log(error); },
      () => { console.log("Complaints Successfully Fetched"); }
    );

  }

}
