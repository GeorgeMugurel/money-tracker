import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { TrackerClass } from './money-tracker/tracker';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyTrackerService {

  http: Http;

  headers: any = {
    'content-type':"application/json",
    'x-apikey': '5c14b061e908ae6c73f622e7',
    "cache-control": "no-cache"
  }

  url: string = "https://angularcourse-a170.restdb.io/rest/tracker";

  constructor(http: Http) {
    this.http = http;
  }

  saveIncome(income:TrackerClass): Observable<Response> {
    return this.http.post(this.url, income, {headers: this.headers});
   }

  ngOnInit() {
  }

}
