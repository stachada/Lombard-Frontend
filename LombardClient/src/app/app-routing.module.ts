import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionHandleComponent } from './components/transactions/transaction-handle/transaction-handle.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionListComponent },
  { path: 'transaction/:id', component: TransactionHandleComponent }
];
  { path: "items", component: ItemsListComponent },
  { path: 'transaction', component: TransactionListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
