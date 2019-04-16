import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TransacitonsService } from '../../../services/transactions-service';
import { Transaction } from '../../../models/transaction';
import { Pagination, PaginatedResult } from '../../../models/pagination';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @ViewChild('updateModal') updateModal: ModalDirective;
  transactions: Transaction[];
  pagination: Pagination = <Pagination>{
    itemsPerPage: 4,
    currentPage: 1,
  }
  modalRef: BsModalRef;
  idToDelete: number;
  transactionToUpdate: Transaction = <Transaction>{};

  constructor(private service: TransacitonsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.service.getTransactions(1, 4)
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
    this.service.getTransactions(currentPage, 4)
      .subscribe((data: PaginatedResult<Transaction[]>) => {
        this.transactions = data.result;
        this.pagination = data.pagination;
      }, ((error: HttpErrorResponse) => {
        error.message;
        if (error.status === 404) { this.transactions = []; this.pagination.totalPages = 0; }
        console.log(error.error);
      }));
  }

  openDeleteTransactionModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.idToDelete = id;
  }

  confirmDeleteTransaction(): void {
    this.service.deleteTransaction(this.idToDelete)
      .subscribe(x => this.loadTransactions(this.pagination.currentPage),
        ((error: HttpErrorResponse) => {
          console.log(error.message);
        }));
    this.modalRef.hide();
  }

  cancelDeleteTransaction(): void {
    this.modalRef.hide();
  }

  openUpdateTransactionModal(transaction: Transaction) {
    this.transactionToUpdate = transaction;
    this.updateModal.show();
  }

  updateTransaction() {
    this.service.updateTransaction(this.transactionToUpdate)
      .subscribe(x => this.loadTransactions(this.pagination.currentPage));
    this.updateModal.hide();
  }
}
