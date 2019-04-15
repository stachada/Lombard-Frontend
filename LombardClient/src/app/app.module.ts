import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './components/transactions/transaction-details/transaction.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ItemsComponent } from './components/items/items.component';
import { TransactionHandleComponent } from './components/transactions/transaction-handle/transaction-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    TransactionComponent,
    TransactionListComponent,
    NavComponent,
    ItemsComponent,
    TransactionHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
