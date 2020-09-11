import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrFooterComponent } from './pr-footer.component';

describe('PrFooterComponent', () => {
  let component: PrFooterComponent;
  let fixture: ComponentFixture<PrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
