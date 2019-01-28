import { Priority } from './../enums/priority';
import { IExpense } from './../models/expense';
import { Component, OnInit } from '@angular/core';
import { Currency } from './../enums/currency';
import { CurrencyConverterService } from '../services/currency-converter.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'add-expense',
  templateUrl: 'AddExpense.html',
  styleUrls: ['AddExpense.scss']
})
export class AddExpense implements OnInit{


  // model linked variables
  public name:string = ""
  public date:string 
  public description: string
  public amount: number
  public currency: Currency = Currency.USD
  public priority: Priority


  // enum variables
  priorities = []
  currencies = []

  // expense variable
  public expense: IExpense = <IExpense>{};

  constructor(private currencyService: CurrencyConverterService, private dp: DatePipe) {

    this.priorities = Object.keys(Priority)
    this.currencies = Object.keys(Currency)
  }
  ngOnInit(){
    this.date =  this.dp.transform(new Date(), 'yyyy-MM-dd')
  }

  public async submitExpense() {
    await this.formPayload()
    console.log(this.expense)
  }

   public formPayload(): void {
    this.expense.name = this.name;
    this.expense.description = this.description;
    this.expense.date = this.date;
    this.expense.priority = this.priority
    this.expense.amount = this.amount
    this.expense.currency = this.currency

    if(this.currency !== Currency.INR) {
      this.currencyService.getConversionRate(this.currency).subscribe((data: any) => {
        const curreny_param =  `${this.currency}_INR`
        this.expense.rupeeEquivalent = Math.ceil(<number>this.amount * data[curreny_param])
      })
    }
    else {
      this.expense.rupeeEquivalent = this.amount.valueOf();
    }

    
  }
}
