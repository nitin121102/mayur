import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorApprovalComponent } from './editor-approval.component';

describe('EditorApprovalComponent', () => {
  let component: EditorApprovalComponent;
  let fixture: ComponentFixture<EditorApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
