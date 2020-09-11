import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAmbassidorComponent } from './it-ambassidor.component';

describe('ItAmbassidorComponent', () => {
  let component: ItAmbassidorComponent;
  let fixture: ComponentFixture<ItAmbassidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItAmbassidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItAmbassidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
