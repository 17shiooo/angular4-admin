import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineFreeComponent } from './fine-free.component';

describe('FineFreeComponent', () => {
  let component: FineFreeComponent;
  let fixture: ComponentFixture<FineFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
