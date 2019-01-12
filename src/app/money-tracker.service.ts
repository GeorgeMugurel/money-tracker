import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Income } from './money-tracker/income/income-class';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoneyTrackerService {

  http: Http;

  headers: any = {
    'content-type':"application/json",
    'x-apikey': '5c39a2f966292476821c9ec0',
    "cache-control": "no-cache"
  }

  url: string = "https://tracker-e3a5.restdb.io/rest/incomes";

  constructor(http: Http) {
    this.http = http;
  }

  saveIncome(income:Income): Observable<Response> {
    return this.http.post(this.url, income, {headers: this.headers});
   }

  getAll(): Observable<Income[]> {
    var mapToIncome = map((response:Response)=>{
      return response.json();
    });
    return mapToIncome(this.http.get(this.url, {headers: this.headers}));
  }

  editIncome(income:Income , id : string): Observable<Response> {
    return this.http.put(this.url + "/" + id, income, {headers: this.headers});
   }

  getById(id: string): Observable<Income>{
    var mapToUsers = map((response:Response)=>{
      return response.json();
    });
    return mapToUsers(this.http.get(this.url + "/" + id, {headers: this.headers}));
  }

  deleteIncome(id : string): Observable<Response> {
    return this.http.delete(this.url + "/" + id, {headers: this.headers});
   }

  ngOnInit() {
  }

}
