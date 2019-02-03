import { SearchExpensesComponent } from './../search-expenses/search-expenses.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewExpenses } from './ViewExpenses';
import { ExpenseComponent } from '../Expense/expense.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ViewExpenses }])
  ],
  entryComponents: [SearchExpensesComponent],
  declarations: [ViewExpenses, ExpenseComponent, SearchExpensesComponent]
})
export class ViewExpensesModule {}
