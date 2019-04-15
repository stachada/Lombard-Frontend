import { Component, OnInit } from '@angular/core';
import { TransacitonsService } from '../../../services/transactions-service';
import { Transaction } from '../../../models/transaction';
import { Pagination, PaginatedResult } from '../../../models/pagination';
import { PaginationComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];
  pagination: Pagination = <Pagination>{
    itemsPerPage: 4,
    currentPage: 1,
  }

  constructor(private service: TransacitonsService) {  }

  ngOnInit() {
    this.service.getTransactions(1, 4)
      .subscribe((data: PaginatedResult<Transaction[]>) => {
        this.transactions = data.result;
        this.pagination = data.pagination;
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadTransactions(this.pagination.currentPage);
  }

  loadTransactions(currentPage: number) {
    this.service.getTransactions(currentPage, 4)
      .subscribe((data: PaginatedResult<Transaction[]>) => {
        this.transactions = data.result;
        this.pagination = data.pagination;
      });
  }
}
