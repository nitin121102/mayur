import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPostComponent } from './apply-post.component';

describe('ApplyPostComponent', () => {
  let component: ApplyPostComponent;
  let fixture: ComponentFixture<ApplyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
