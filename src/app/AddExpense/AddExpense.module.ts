import { AddExpenseService } from './../services/add-expense.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddExpense } from './AddExpense';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddExpense }])
  ],
  declarations: [AddExpense],
  providers: [DatePipe, AddExpenseService]
})
export class AddExpenseModule {}
