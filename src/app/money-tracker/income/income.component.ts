import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Income } from './income-class';
import { MoneyTrackerService } from 'src/app/money-tracker.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  

  public doughnutChartLabels:string[];
  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  income: Income[];
  restApi: MoneyTrackerService;

  constructor(restApi : MoneyTrackerService){
    this.restApi = restApi;
    this.income = [];
    
  }

  ngOnInit() {
    this.getIncomes();
  }

  chartVarValues(list:Income[]) {
    var categoryList = [];
    var amountList = [];
    for(var i = 0; i < list.length; i++){
        if(!categoryList.find(x=> x == list[i].category)) {
          categoryList.push(list[i].category);
          var sum = 0;
          var all = list.filter(x=> x.category == list[i].category);
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          sum =  all.map(x=>x.amount).reduce(reducer);

          amountList.push(sum);
        }
    }
    console.log(categoryList, amountList);
    this.doughnutChartLabels = categoryList;
    this.doughnutChartData = amountList;
  }



  getIncomes(): any {
    this.restApi.getAll().subscribe(response => {
      console.log(response);
      this.chartVarValues(response);
      this.income = response;
    });
  }

  delete(income:Income) {
    this.restApi.deleteIncome(income._id).subscribe(response=>{
      console.log(response);
      this.getIncomes();
    });
  }

}
