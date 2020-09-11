import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPageLoginComponentBeforeComponent } from './pr-page-login-component-before.component';

describe('PrPageLoginComponentBeforeComponent', () => {
  let component: PrPageLoginComponentBeforeComponent;
  let fixture: ComponentFixture<PrPageLoginComponentBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPageLoginComponentBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPageLoginComponentBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
