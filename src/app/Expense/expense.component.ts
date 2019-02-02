import { IExpense } from './../models/expense';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  @Input() expense: IExpense
  constructor() { }

  ngOnInit() {
  }

}
