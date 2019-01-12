import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseformgroupComponent } from './expenseformgroup.component';

describe('ExpenseformgroupComponent', () => {
  let component: ExpenseformgroupComponent;
  let fixture: ComponentFixture<ExpenseformgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseformgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseformgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
