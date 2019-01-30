import { Component, OnInit } from '@angular/core';
import { Income } from '../income-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

  income: Income = new Income();
  restApiIncome: MoneyTrackerService;

  constructor(restApiIncome : MoneyTrackerService) {

    this.restApiIncome = restApiIncome; 

  }

  ngOnInit() {

  }

  addIncome(income:Income) {
    this.restApiIncome.saveIncome(income).subscribe(response=>{
      console.log(response);
    });
  }

}
