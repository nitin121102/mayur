import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrMypostComponent } from './pr-mypost.component';

describe('PrMypostComponent', () => {
  let component: PrMypostComponent;
  let fixture: ComponentFixture<PrMypostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrMypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrMypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
