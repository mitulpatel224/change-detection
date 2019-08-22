import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTiresComponent } from './with-tires.component';

describe('WithTiresComponent', () => {
  let component: WithTiresComponent;
  let fixture: ComponentFixture<WithTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithTiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
