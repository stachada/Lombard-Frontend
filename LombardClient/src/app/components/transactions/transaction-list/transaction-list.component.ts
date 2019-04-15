import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TransacitonsService } from '../../../services/transactions-service';
import { Transaction } from '../../../models/transaction';
import { Pagination, PaginatedResult } from '../../../models/pagination';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap';

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

  

  deleteTransaction(id: number) {
    console.log(id);
  }

  openDeleteTransactionModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.idToDelete = id;
  }

  confirmDeleteTransaction(): void {
    this.service.deleteTransaction(this.idToDelete)
      .subscribe(x => this.loadTransactions(this.pagination.currentPage));
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
