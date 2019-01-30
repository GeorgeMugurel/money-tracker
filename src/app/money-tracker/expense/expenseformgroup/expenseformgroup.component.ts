import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Expense } from '../expense-class';

@Component({
  selector: 'app-expenseformgroup',
  templateUrl: './expenseformgroup.component.html',
  styleUrls: ['./expenseformgroup.component.css']
})
export class ExpenseformgroupComponent implements OnInit {

  @Input()
  expense: Expense;
  
  @Output()
  trackerModelOutputExpense: EventEmitter<Expense> = new EventEmitter();

  categoriesExpense = ['rent', 'car-rate', 'invoices'];

  constructor() {}

  formSubmit(){
    this.trackerModelOutputExpense.emit(this.expense);
  }

  ngOnInit() {
  }

}
