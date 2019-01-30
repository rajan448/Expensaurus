import { IExpense } from './../models/expense';
import { Component, OnInit } from '@angular/core';
import { GetExpensesService } from '../services/get-expenses.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'ViewExpenses.html',
  styleUrls: ['ViewExpenses.scss']
})
export class ViewExpenses implements OnInit{

  public expenses: IExpense[]

  constructor(private getExpensesSrvc: GetExpensesService){

  }

  public ngOnInit(){
    this.getExpensesSrvc.getExpenses().subscribe((res: IExpense[]) => {
      this.expenses = res.reverse()
    })
  }
}
