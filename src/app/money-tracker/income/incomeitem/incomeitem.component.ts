import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Income } from '../income-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incomeitem',
  templateUrl: './incomeitem.component.html',
  styleUrls: ['./incomeitem.component.css']
})
export class IncomeitemComponent implements OnInit {

  @Input()
  income: Income;
  
  @Output()
  remove : EventEmitter<Income> = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['/income/edit/' + this.income._id]);
  }

  removeIncome() {
    this.remove.emit(this.income);
  }

}
