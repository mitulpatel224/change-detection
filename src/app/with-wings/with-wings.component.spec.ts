import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithWingsComponent } from './with-wings.component';

describe('WithWingsComponent', () => {
  let component: WithWingsComponent;
  let fixture: ComponentFixture<WithWingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithWingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
