import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerParentComponent } from './tracker-parent.component';

describe('TrackerParentComponent', () => {
  let component: TrackerParentComponent;
  let fixture: ComponentFixture<TrackerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
