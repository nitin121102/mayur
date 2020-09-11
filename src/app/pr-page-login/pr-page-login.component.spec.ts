import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPageLoginComponent } from './pr-page-login.component';

describe('PrPageLoginComponent', () => {
  let component: PrPageLoginComponent;
  let fixture: ComponentFixture<PrPageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
