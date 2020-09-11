import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrComponent } from './login-pr.component';

describe('LoginPrComponent', () => {
  let component: LoginPrComponent;
  let fixture: ComponentFixture<LoginPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
