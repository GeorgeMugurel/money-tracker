import { Component, OnInit } from '@angular/core';
import { TrackerClass } from '../tracker';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  income: TrackerClass = new TrackerClass();
  restApiTracker: MoneyTrackerService;
  categories = ['salary', 'night-shift', 'work-bonus'];

  constructor(restApiTracker: MoneyTrackerService) {
    this.restApiTracker = restApiTracker;
  }

  addIncome(income:TrackerClass) {
    this.restApiTracker.saveIncome(income).subscribe(response=>{
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
