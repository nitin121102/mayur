import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRegiHeaderComponent } from './pr-regi-header.component';

describe('PrRegiHeaderComponent', () => {
  let component: PrRegiHeaderComponent;
  let fixture: ComponentFixture<PrRegiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrRegiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrRegiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
