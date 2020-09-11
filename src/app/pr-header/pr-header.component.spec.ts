import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHeaderComponent } from './pr-header.component';

describe('PrHeaderComponent', () => {
  let component: PrHeaderComponent;
  let fixture: ComponentFixture<PrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
