import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrRegisterComponent } from './pr-register.component';

describe('PrRegisterComponent', () => {
  let component: PrRegisterComponent;
  let fixture: ComponentFixture<PrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
