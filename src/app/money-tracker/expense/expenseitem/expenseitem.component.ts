import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenseitem',
  templateUrl: './expenseitem.component.html',
  styleUrls: ['./expenseitem.component.css']
})
export class ExpenseitemComponent implements OnInit {

  @Input()
  expense: Expense;
  
  @Output()
  expenseEmitter : EventEmitter<Expense> = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  editExpense() {
    this.router.navigate(['/expense/edit/' + this.expense._id]);
  }

  removeExpense() {
    this.expenseEmitter.emit(this.expense);
  }

}
