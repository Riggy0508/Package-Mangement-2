import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPincodeAvailabilityComponent } from './check-pincode-availability.component';

describe('CheckPincodeAvailabilityComponent', () => {
  let component: CheckPincodeAvailabilityComponent;
  let fixture: ComponentFixture<CheckPincodeAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPincodeAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPincodeAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
