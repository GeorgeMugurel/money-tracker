import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  expense: Expense = new Expense();
  restApiIncome: MoneyTrackerService;

  constructor(restApiIncome : MoneyTrackerService) {

    this.restApiIncome = restApiIncome; 

  }

  ngOnInit() {}

  addExpense(expense:Expense) {
    console.log('da');
    this.restApiIncome.saveExpense(expense).subscribe(response=>{
      console.log(response);
    });
  }

}
