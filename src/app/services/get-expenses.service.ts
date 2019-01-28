import { Injectable } from "@angular/core";
import { IExpense } from "../models/expense";
import { expenses } from '../mocks/expenses.mock'

@Injectable()
export class GetExpensesService {

public getExpenses(): IExpense[]{
    return <IExpense[]>expenses
}
}