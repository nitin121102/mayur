import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPageJournalistComponent } from './pr-page-journalist.component';

describe('PrPageJournalistComponent', () => {
  let component: PrPageJournalistComponent;
  let fixture: ComponentFixture<PrPageJournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrPageJournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPageJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
