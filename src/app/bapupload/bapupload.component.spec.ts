import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BapuploadComponent } from './bapupload.component';

describe('BapuploadComponent', () => {
  let component: BapuploadComponent;
  let fixture: ComponentFixture<BapuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BapuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BapuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
