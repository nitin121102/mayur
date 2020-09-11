import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrProfileComponent } from './pr-profile.component';

describe('PrProfileComponent', () => {
  let component: PrProfileComponent;
  let fixture: ComponentFixture<PrProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
