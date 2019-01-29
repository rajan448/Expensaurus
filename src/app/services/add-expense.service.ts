import { IExpense } from './../models/expense';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AddExpenseService {

    constructor(private http: HttpClient){

    }

    public addExpense(expense: IExpense) {
        return this.http.post('https://expensaurus-81043.firebaseio.com/expenses.json', expense);
    }
}