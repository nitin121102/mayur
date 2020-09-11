import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPageJournalistLoginComponent } from './pr-page-journalist-login.component';

describe('PrPageJournalistLoginComponent', () => {
  let component: PrPageJournalistLoginComponent;
  let fixture: ComponentFixture<PrPageJournalistLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPageJournalistLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPageJournalistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
