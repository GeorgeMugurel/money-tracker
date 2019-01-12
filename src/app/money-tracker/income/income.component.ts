import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Income } from './income-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income: Income[];
  restApi: MoneyTrackerService;

  constructor(restApi : MoneyTrackerService){
    this.restApi = restApi;
    this.income = [];
  }

  ngOnInit() {
    this.getIncomes();
  }

  getIncomes(): any {
    this.restApi.getAll().subscribe(response => {
      console.log(response);
      this.income = response;
    })
  }

  delete(income:Income) {
    this.restApi.deleteIncome(income._id).subscribe(response=>{
      console.log(response);
      this.getIncomes();
    });
  }

}
