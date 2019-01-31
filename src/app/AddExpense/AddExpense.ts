import { GetExpensesService } from './../services/get-expenses.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Priority } from './../enums/priority';
import { IExpense } from './../models/expense';
import { Component, OnInit } from '@angular/core';
import { Currency } from './../enums/currency';
import { CurrencyConverterService } from '../services/currency-converter.service';
import { DatePipe } from '@angular/common';
import { AddExpenseService } from '../services/add-expense.service';
import { ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators'

@Component({
  selector: 'add-expense',
  templateUrl: 'AddExpense.html',
  styleUrls: ['AddExpense.scss']
})
export class AddExpense implements OnInit {


  // model linked variables
  public name: string = ""
  public date: string
  public description: string
  public amount: number
  public currency: Currency = Currency.USD
  public priority: Priority



  // enum variables
  priorities = []
  currencies = []

  // expense variable
  public expense: IExpense = <IExpense>{};

  constructor(private currencyService: CurrencyConverterService, private dp: DatePipe,
    private addExpenseSrvc: AddExpenseService, private toast: ToastController,
    private getExpensesSrvc: GetExpensesService) {

    this.priorities = Object.keys(Priority)
    this.currencies = Object.keys(Currency)
  }
  ngOnInit() {
    this.date = this.dp.transform(new Date(), 'yyyy-MM-dd')
  }

  async submitExpense() {
    try {
      await this.formPayload()
      console.log(this.expense);
      this.addExpenseSrvc.addExpense(this.expense).subscribe((res) => {
        this.showToast("Your expense has been saved successfully!", 'success')
      })
    }
    catch (e) {
      this.showToast("There was an error in saving your expense!", 'danger')
    }


  }

  async formPayload() {

    
    
    this.expense.name = this.name;
    this.expense.description = this.description;
    this.expense.date = this.date;
    this.expense.priority = this.priority
    this.expense.amount = this.amount
    this.expense.currency = this.currency

    const curreny_param = `${this.currency}_INR`

    if (this.currency !== Currency.INR) {

      const response = await this.currencyService.getConversionRate(this.currency).toPromise();
      this.expense.rupeeEquivalent = Math.ceil(<number>this.amount * response[curreny_param])

    }
    else {
      this.expense.rupeeEquivalent = this.amount.valueOf();
    }

    await this.updateLatestId()


  }

  async showToast(message, color) {
    const toastIn = await this.toast.create({
      message: message,
      color: color,
      duration: 2000
    })
    toastIn.present();
  }

  // get last id and assign in expense variable
  async updateLatestId() {
    const obj = await this.getExpensesSrvc.getLastIndex().pipe(take(1)).toPromise()
    console.log(obj)
    if(obj.length > 0){
      this.expense.id = obj[0]['id'] + 1
    } else {
      this.expense.id=1
    }
  }
}
