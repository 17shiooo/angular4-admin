import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityManagementComponent } from './authority-management.component';

describe('AuthorityManagementComponent', () => {
  let component: AuthorityManagementComponent;
  let fixture: ComponentFixture<AuthorityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
