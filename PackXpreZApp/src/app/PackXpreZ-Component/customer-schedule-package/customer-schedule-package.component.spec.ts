import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSchedulePackageComponent } from './customer-schedule-package.component';

describe('CustomerSchedulePackageComponent', () => {
  let component: CustomerSchedulePackageComponent;
  let fixture: ComponentFixture<CustomerSchedulePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSchedulePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSchedulePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
