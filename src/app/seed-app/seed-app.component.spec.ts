import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedAppComponent } from './seed-app.component';

describe('SeedAppComponent', () => {
  let component: SeedAppComponent;
  let fixture: ComponentFixture<SeedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
