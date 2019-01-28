import { Priority } from './../enums/priority';
import { IExpense } from './../models/expense';
import { Component, OnInit } from '@angular/core';
import { Currency } from './../enums/currency';
import { CurrencyConverterService } from '../services/currency-converter.service';

@Component({
  selector: 'add-expense',
  templateUrl: 'AddExpense.html',
  styleUrls: ['AddExpense.scss']
})
export class AddExpense implements OnInit{


  // model linked variables
  public name:string = ""
  public date:Date;
  public description: string
  public amount: number
  public currency: Currency
  public priority: Priority

  // enum variables
  priorities = []
  currencies = []

  // expense variable
  public expense: IExpense = <IExpense>{};

  constructor(private currencyService: CurrencyConverterService) {

    this.priorities = Object.keys(Priority)
    this.currencies = Object.keys(Currency)
  }
  ngOnInit(){
  }

  public submitExpense():void {
    this.formPayload()
  }

  public formPayload(): void {
    this.expense.name = this.name;
    this.expense.description = this.description;
    this.expense.date = this.date;
    this.expense.priority = this.priority
    this.expense.amount = this.amount

    if(this.currency !== Currency.INR) {
      this.currencyService.getConversionRate().subscribe((data: any) => {
        this.expense.rupeeEquivalent = Math.ceil(this.amount * JSON.parse(data._body).USD_INR)
        console.log(this.expense)
      })
    }

    
  }
}
