import { Component, OnInit } from '@angular/core';
import { Expense } from './expense-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expense: Expense[];
  restApi: MoneyTrackerService;

  constructor(restApi : MoneyTrackerService){
    this.restApi = restApi;
    this.expense = [];
  }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses(): any {
    this.restApi.getAllExpenses().subscribe(response => {
      console.log(response);
      this.expense = response;
    })
  }

  expenseDelete(expense:Expense) {
    this.restApi.deleteExpense(expense._id).subscribe(response=>{
      console.log(response);
      this.getExpenses();
    });
  }

}
