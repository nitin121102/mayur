import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadingFilesComponent } from './uploading-files.component';

describe('UploadingFilesComponent', () => {
  let component: UploadingFilesComponent;
  let fixture: ComponentFixture<UploadingFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadingFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadingFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
