import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentManagementComponent } from './payment-management.component';

describe('PaymentManagementComponent', () => {
  let component: PaymentManagementComponent;
  let fixture: ComponentFixture<PaymentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
