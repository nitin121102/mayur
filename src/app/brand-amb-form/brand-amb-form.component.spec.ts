import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAmbFormComponent } from './brand-amb-form.component';

describe('BrandAmbFormComponent', () => {
  let component: BrandAmbFormComponent;
  let fixture: ComponentFixture<BrandAmbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandAmbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAmbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
