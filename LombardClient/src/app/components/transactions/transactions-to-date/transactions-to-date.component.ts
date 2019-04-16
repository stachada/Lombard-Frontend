import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { Pagination, PaginatedResult } from 'src/app/models/pagination';
import { TransacitonsService } from 'src/app/services/transactions-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions-to-date',
  templateUrl: './transactions-to-date.component.html',
  styleUrls: ['./transactions-to-date.component.scss']
})
export class TransactionsToDateComponent implements OnInit {
  transactions: Transaction[];
  pagination: Pagination = <Pagination>{
    itemsPerPage: 4,
    currentPage: 1,
  }
  toDate: string = new Date().toLocaleDateString('en-US');

  constructor(private service: TransacitonsService) { }

  ngOnInit() {
    this.service.getTransactionsToDate(1, 4, this.toDate)
      .subscribe((data: PaginatedResult<Transaction[]>) => {
        this.transactions = data.result;
        this.pagination = data.pagination;
      }, ((error: HttpErrorResponse) => {
        error.message;
        console.log(error.message);
      }));
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadTransactions(this.pagination.currentPage);
  }

  loadTransactions(currentPage: number) {
    this.service.getTransactionsToDate(currentPage, 4, this.toDate)
      .subscribe((data: PaginatedResult<Transaction[]>) => {
        this.transactions = data.result;
        this.pagination = data.pagination;
      }, ((error: HttpErrorResponse) => {
        error.message;
        if (error.status === 404) { this.transactions = []; this.pagination.totalPages = 0; }
        console.log(error.error);
      }));
  }

  generateReport() {
    this.loadTransactions(this.pagination.currentPage);
  }

}
