import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IExpense } from '../models/expense';

@Injectable()
export class GetExpensesService {

    public step = 10;

    private serviceURL = 'http://localhost:8099/expenses';

    constructor(private http: HttpClient) {
    }

    public addExpense(expense: IExpense) {
        return this.http.post(this.serviceURL, expense);
    }

    public fetchRecords(end) {
        return this.http.get(this.serviceURL, {
            params: new HttpParams({fromObject: {
                page: (end).toString(),
                size: (this.step).toString()
            }})
        });
    }
}
