import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationPositionComponent } from './duration-position.component';

describe('DurationPositionComponent', () => {
  let component: DurationPositionComponent;
  let fixture: ComponentFixture<DurationPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
