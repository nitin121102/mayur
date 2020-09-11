import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuserapprovalComponent } from './singleuserapproval.component';

describe('SingleuserapprovalComponent', () => {
  let component: SingleuserapprovalComponent;
  let fixture: ComponentFixture<SingleuserapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleuserapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuserapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
