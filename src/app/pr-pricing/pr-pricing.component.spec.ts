import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPricingComponent } from './pr-pricing.component';

describe('PrPricingComponent', () => {
  let component: PrPricingComponent;
  let fixture: ComponentFixture<PrPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
