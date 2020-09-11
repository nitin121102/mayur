import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionTypeComponent } from './selection-type.component';

describe('SelectionTypeComponent', () => {
  let component: SelectionTypeComponent;
  let fixture: ComponentFixture<SelectionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
