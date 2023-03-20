import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintsOfficerComponent } from './get-complaints-officer.component';

describe('GetComplaintsOfficerComponent', () => {
  let component: GetComplaintsOfficerComponent;
  let fixture: ComponentFixture<GetComplaintsOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetComplaintsOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplaintsOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
