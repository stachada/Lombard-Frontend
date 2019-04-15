import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionListComponent },
  { path: 'category-list', component: CategoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
