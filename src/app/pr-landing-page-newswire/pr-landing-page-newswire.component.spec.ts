import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrLandingPageNewswireComponent } from './pr-landing-page-newswire.component';

describe('PrLandingPageNewswireComponent', () => {
  let component: PrLandingPageNewswireComponent;
  let fixture: ComponentFixture<PrLandingPageNewswireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrLandingPageNewswireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrLandingPageNewswireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
