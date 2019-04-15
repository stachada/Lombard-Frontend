import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';

const routes: Routes = [
  { path: "items", component: ItemsComponent },
  { path: 'transaction', component: TransactionListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
