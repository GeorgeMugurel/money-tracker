import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './money-tracker/income/income.component';
import { ExpenseComponent } from './money-tracker/expense/expense.component';
import { AddincomeComponent } from './money-tracker/income/addincome/addincome.component';
import { EditincomeComponent } from './money-tracker/income/editincome/editincome.component';
import { IncomeformgroupComponent } from './money-tracker/income/incomeformgroup/incomeformgroup.component';
import { AddexpenseComponent } from './money-tracker/expense/addexpense/addexpense.component';
import { EditexpenseComponent } from './money-tracker/expense/editexpense/editexpense.component';
import { ExpenseformgroupComponent } from './money-tracker/expense/expenseformgroup/expenseformgroup.component';
import { IncomeitemComponent } from './money-tracker/income/incomeitem/incomeitem.component';
import { ExpenseitemComponent } from './money-tracker/expense/expenseitem/expenseitem.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ExpenseComponent,
    AddincomeComponent,
    EditincomeComponent,
    IncomeformgroupComponent,
    AddexpenseComponent,
    EditexpenseComponent,
    ExpenseformgroupComponent,
    IncomeitemComponent,
    ExpenseitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
