import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTeamPageComponent } from './pr-team-page.component';

describe('PrTeamPageComponent', () => {
  let component: PrTeamPageComponent;
  let fixture: ComponentFixture<PrTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
