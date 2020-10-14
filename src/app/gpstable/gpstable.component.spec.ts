import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpstableComponent } from './gpstable.component';

describe('GpstableComponent', () => {
  let component: GpstableComponent;
  let fixture: ComponentFixture<GpstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
