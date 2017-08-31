import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigComponent } from './payment-config.component';

describe('PaymentConfigComponent', () => {
  let component: PaymentConfigComponent;
  let fixture: ComponentFixture<PaymentConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
