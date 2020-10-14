import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrubtionComponent } from './distrubtion.component';

describe('DistrubtionComponent', () => {
  let component: DistrubtionComponent;
  let fixture: ComponentFixture<DistrubtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrubtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrubtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
