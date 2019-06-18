import { IExpense } from './../models/expense';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GetExpensesService } from '../services/get-expenses.service';
import { take } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'ViewExpenses.html',
  styleUrls: ['ViewExpenses.scss']
})
export class ViewExpenses implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public expenses: IExpense[];
  public currentPage = 0;
  public infinite = false;

  constructor(private getExpensesSrvc: GetExpensesService) {
  }

  ngOnInit() {
    this.getExpensesSrvc.fetchRecords(this.currentPage).subscribe((res: IExpense[]) => {
      this.expenses = res.reverse();
    });
  }

  public fetchMore(event) {
    this.currentPage = this.currentPage + 1;
    this.getExpensesSrvc.fetchRecords(this.currentPage).subscribe((res: IExpense[]) => {
      const newExpenses = res.reverse();
      for (let i = 0; i < newExpenses.length; i++) {
        this.expenses.push(newExpenses[i]);
      }
      this.infinite = false;
      event.target.complete();
    });
  }
}
