import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHolidayComponent } from './common-holiday.component';

describe('CommonHolidayComponent', () => {
  let component: CommonHolidayComponent;
  let fixture: ComponentFixture<CommonHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
