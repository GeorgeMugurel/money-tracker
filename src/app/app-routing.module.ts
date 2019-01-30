import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './money-tracker/expense/expense.component';
import { IncomeComponent } from './money-tracker/income/income.component';
import { AddincomeComponent } from './money-tracker/income/addincome/addincome.component';
import { EditincomeComponent } from './money-tracker/income/editincome/editincome.component';
import { AddexpenseComponent } from './money-tracker/expense/addexpense/addexpense.component';
import { EditexpenseComponent } from './money-tracker/expense/editexpense/editexpense.component';

const routes: Routes = [
  { path: 'expense', component: ExpenseComponent },
  { path: 'expense/add', component: AddexpenseComponent },
  { path: 'expense/edit/:id', component: EditexpenseComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'income/add', component: AddincomeComponent },
  { path: 'income/edit/:id', component: EditincomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
