import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPackageHistoryComponent } from './get-package-history.component';

describe('GetPackageHistoryComponent', () => {
  let component: GetPackageHistoryComponent;
  let fixture: ComponentFixture<GetPackageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPackageHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPackageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
