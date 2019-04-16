import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TurnoverRaportComponent } from './components/turnover-raport/turnover-raport.component';
import { ProfitRaportComponent } from './components/profit-raport/profit-raport.component';
import { TransactionHandleComponent } from './components/transactions/transaction-handle/transaction-handle.component';
import { TransactionsToDateComponent } from './components/transactions/transactions-to-date/transactions-to-date.component';
import { TransactionsComponent } from './components/transactions/transactions/transactions.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionsComponent, children: [
    { path: 'todate', component: TransactionsToDateComponent },
    { path: 'list', component: TransactionListComponent },
    { path: 'item/:id', component: TransactionHandleComponent },
  ] },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'turnover', component: TurnoverRaportComponent },
  { path: 'profit', component: ProfitRaportComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'transaction', component: TransactionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
