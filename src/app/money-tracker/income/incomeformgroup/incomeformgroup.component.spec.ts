import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeformgroupComponent } from './incomeformgroup.component';

describe('IncomeformgroupComponent', () => {
  let component: IncomeformgroupComponent;
  let fixture: ComponentFixture<IncomeformgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeformgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeformgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
