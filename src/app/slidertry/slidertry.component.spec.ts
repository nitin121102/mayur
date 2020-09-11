import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidertryComponent } from './slidertry.component';

describe('SlidertryComponent', () => {
  let component: SlidertryComponent;
  let fixture: ComponentFixture<SlidertryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidertryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidertryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
