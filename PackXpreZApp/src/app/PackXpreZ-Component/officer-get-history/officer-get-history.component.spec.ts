import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerGetHistoryComponent } from './officer-get-history.component';

describe('OfficerGetHistoryComponent', () => {
  let component: OfficerGetHistoryComponent;
  let fixture: ComponentFixture<OfficerGetHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerGetHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerGetHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
