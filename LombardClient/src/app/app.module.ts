import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transactions/transaction-details/transaction.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { ItemFormComponent } from './components/items/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    TransactionComponent,
    TransactionListComponent,
    NavComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
