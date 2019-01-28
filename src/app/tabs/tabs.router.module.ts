import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'add-expense',
        children: [
          {
            path: '',
            loadChildren: '../AddExpense/AddExpense.module#AddExpenseModule'
          }
        ]
      },
      {
        path: 'view-expenses',
        children: [
          {
            path: '',
            loadChildren: '../ViewExpenses/ViewExpenses.module#ViewExpensesModule'
          }
        ]
      },
      {
        path: 'view-stats',
        children: [
          {
            path: '',
            loadChildren: '../ViewStats/ViewStats.module#ViewStatsModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/add-expense',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/add-expense',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
