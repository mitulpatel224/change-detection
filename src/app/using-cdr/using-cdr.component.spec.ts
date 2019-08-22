import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCdrComponent } from './using-cdr.component';

describe('UsingCdrComponent', () => {
  let component: UsingCdrComponent;
  let fixture: ComponentFixture<UsingCdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingCdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
