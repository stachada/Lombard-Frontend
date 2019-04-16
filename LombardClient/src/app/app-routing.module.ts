import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
<<<<<<< HEAD
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TurnoverRaportComponent } from './components/turnover-raport/turnover-raport.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionListComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'turnover', component: TurnoverRaportComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'transaction', component: TransactionListComponent },
=======
import { TransactionHandleComponent } from './components/transactions/transaction-handle/transaction-handle.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionListComponent },
  { path: 'transaction/item/:id', component: TransactionHandleComponent },
  { path: 'items', component: ItemsListComponent }
>>>>>>> Adam
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
