import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './money-tracker/expense/expense.component';
import { IncomeComponent } from './money-tracker/income/income.component';

const routes: Routes = [
  { path: 'expense', component: ExpenseComponent },
  { path: 'income', component: IncomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
