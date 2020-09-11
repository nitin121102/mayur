import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprPageComponent } from './editpr-page.component';

describe('EditprPageComponent', () => {
  let component: EditprPageComponent;
  let fixture: ComponentFixture<EditprPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
