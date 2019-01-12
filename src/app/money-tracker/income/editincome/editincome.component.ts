import { Component, OnInit } from '@angular/core';
import { Income } from '../income-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editincome',
  templateUrl: './editincome.component.html',
  styleUrls: ['./editincome.component.css']
})
export class EditincomeComponent implements OnInit {

  income: Income;
  restApiIncome: MoneyTrackerService;
  constructor(restApiCar : MoneyTrackerService, private route:ActivatedRoute) {
    this.restApiIncome = restApiCar; 
  }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.restApiIncome.getById(id).subscribe(response=>{
      console.log(response);
      this.income = response;
    });
  }

  editMyIncome(income:Income) {
    this.restApiIncome.editIncome(income, income._id).subscribe(response=>{
      console.log(response);
    });
  }

}
