import { IExpense } from './../models/expense';
import { Component, OnInit } from '@angular/core';
import { GetExpensesService } from '../services/get-expenses.service';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-tab2',
  templateUrl: 'ViewExpenses.html',
  styleUrls: ['ViewExpenses.scss']
})
export class ViewExpenses implements OnInit{

  public expenses: IExpense[]
  public lastIndexFetched: number

  constructor(private getExpensesSrvc: GetExpensesService){
  }

  async ngOnInit(){
    await this.getLastFetched()
    console.log(this.lastIndexFetched)

    this.getExpensesSrvc.fetchRecords(this.lastIndexFetched).subscribe((res: IExpense[]) => {
      this.expenses = res.reverse();
      console.log(this.expenses)
    })
  }

  async getLastFetched() {
    const obj = await this.getExpensesSrvc.getLastIndex().pipe(take(1)).toPromise()
    if(obj.length > 0){
      this.lastIndexFetched = obj[0]['id']
    }
  }
}
