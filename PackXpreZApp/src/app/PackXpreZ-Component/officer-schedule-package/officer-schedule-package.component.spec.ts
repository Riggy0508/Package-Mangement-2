import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerSchedulePackageComponent } from './officer-schedule-package.component';

describe('OfficerSchedulePackageComponent', () => {
  let component: OfficerSchedulePackageComponent;
  let fixture: ComponentFixture<OfficerSchedulePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerSchedulePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerSchedulePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
