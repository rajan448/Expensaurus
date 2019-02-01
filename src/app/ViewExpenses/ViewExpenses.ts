import { IExpense } from './../models/expense';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GetExpensesService } from '../services/get-expenses.service';
import { take } from 'rxjs/operators'
import { IonInfiniteScroll } from '@ionic/angular'


@Component({
  selector: 'app-tab2',
  templateUrl: 'ViewExpenses.html',
  styleUrls: ['ViewExpenses.scss']
})
export class ViewExpenses implements OnInit{

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public expenses: IExpense[]
  public lastIndexFetched: number
  public infinite: boolean = false

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

  public fetchMore(event) {
    
    this.lastIndexFetched = this.lastIndexFetched - this.getExpensesSrvc.step
    this.getExpensesSrvc.fetchRecords(this.lastIndexFetched).subscribe((res: IExpense[]) => {
      const newExpenses = res.reverse()
      for(let i=0; i<newExpenses.length; i++) {
        this.expenses.push(newExpenses[i])
      }
      this.infinite = false
      event.target.complete()
    })
  }
}
