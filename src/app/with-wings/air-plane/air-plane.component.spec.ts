import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPlaneComponent } from './air-plane.component';

describe('AirPlaneComponent', () => {
  let component: AirPlaneComponent;
  let fixture: ComponentFixture<AirPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
