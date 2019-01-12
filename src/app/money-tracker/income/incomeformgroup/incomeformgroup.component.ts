import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Income } from '../income-class';

@Component({
  selector: 'app-incomeformgroup',
  templateUrl: './incomeformgroup.component.html',
  styleUrls: ['./incomeformgroup.component.css']
})
export class IncomeformgroupComponent implements OnInit {

  @Input()
  income: Income;
  
  @Output()
  trackerModelOutput: EventEmitter<Income> = new EventEmitter();

  categories = ['salary', 'night-shift', 'job-bonus'];

  constructor() {}

  formSubmit(){
    this.trackerModelOutput.emit(this.income);
  }

  ngOnInit() {
  }

}
