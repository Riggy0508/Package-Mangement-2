import { Component, OnInit } from '@angular/core';
import { IPackage } from '../../PackXpreZ-Interfaces/package';
import { PackXprezService } from '../../PackXpreZ-Services/pack-xprez.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {

  package: IPackage;
  islogin: boolean;
  emailId: string;
  awbNumber: string;
  showMsgDiv: boolean;

  constructor(private _service: PackXprezService, private _activeRoute: ActivatedRoute, private _router: Router) {
    this.emailId = sessionStorage.getItem('emailId');

}

  ngOnInit() {
    console.log(this._activeRoute.snapshot.params)
    this.awbNumber = this._activeRoute.snapshot.params['awbnumber'];
    this.getPackageDetails();


  }
  getPackageDetails() {
    this._service.cTrackPackage(this.awbNumber).subscribe(
      res => {

        this.package = res;
        console.log(res);
        if (res == null) {
          this.showMsgDiv = true;
        }
      },
      err => {
        console.log(err);
      },
      () => { }

    );

  }

}
