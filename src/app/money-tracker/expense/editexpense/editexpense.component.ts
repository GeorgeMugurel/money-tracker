import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.css']
})
export class EditexpenseComponent implements OnInit {

  expense: Expense;
  restApiExpense: MoneyTrackerService;
  constructor(restApi : MoneyTrackerService, private route:ActivatedRoute) {
    this.restApiExpense = restApi; 
  }


  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.restApiExpense.getExpenseById(id).subscribe(response=>{
      console.log(response);
      this.expense = response;
    });
  }

  editMyExpense(expense:Expense) {
    this.restApiExpense.editExpense(expense, expense._id).subscribe(response=>{
      console.log(response);
    });
  }

}
