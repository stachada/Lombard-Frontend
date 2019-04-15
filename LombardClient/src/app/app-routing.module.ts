import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionHandleComponent } from './components/transactions/transaction-handle/transaction-handle.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionListComponent },
  { path: 'transaction/item/:id', component: TransactionHandleComponent },
  { path: 'items', component: ItemsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
