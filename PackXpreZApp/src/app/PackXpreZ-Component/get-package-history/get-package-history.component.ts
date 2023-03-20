import { Component, OnInit } from '@angular/core';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { IPackage } from '../../PackXpreZ-Interfaces/package';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-package-history',
  templateUrl: './get-package-history.component.html',
  styleUrls: ['./get-package-history.component.css']
})
export class GetPackageHistoryComponent implements OnInit {

  packages: IPackage[];
  tempPackage: IPackage;
  emailId: string;
  userRole: string;
  CurrentStatus: string;
  showMsgDiv: boolean = false;
  showBtnDiv: boolean = false;

  

  constructor(private _service: PackXprezService, private _router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.emailId = sessionStorage.getItem('emailId');
}

  ngOnInit() {
      this.getPackageDetails();


  }

  getPackageDetails() {
    this._service.cGetPackageHistory(this.emailId).subscribe(
      res => {

        console.log("Result:",res);
        this.packages = res;
        if (res == null || res.length == 0) {
          this.showMsgDiv = true;
        }
        else {
          for (var item in this.packages) {
            if (this.packages[item].DeliveryStatus == "Delivered" || this.packages[item].DeliveryStatus == "Failed") {
              this.showBtnDiv = true;
            }
          }
          this.showMsgDiv = false;
        }
      },
      err => {
        console.log(err);
      },
      () => { console.log("Get Package History Done");  }

    );

  }

  EditProfilePage() {
    this._router.navigate(['/editprofile']);
  }

  EditPasswordPage() {
    this._router.navigate(['/changepassword']);
  }

  RecallPackage(awbnumber: string) {
    console.log("Inside RecallPackage");
    this._service.cRecall(awbnumber).subscribe(

      success => {
        if (success) {
          console.log("Returns true");
          this.ngOnInit();
        }
        else {
          console.log("Returns false");
        }
      },
      error => {
        console.log(error);
      },
      () => { console.log("Method done"); }

    );
  }



}
