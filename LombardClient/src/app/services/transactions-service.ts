import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { Injectable } from '@angular/core';
import { ServiceBase } from './service-base';
import { PaginatedResult } from '../models/pagination';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TransacitonsService {

    constructor(private baseService: ServiceBase) { }

    public getTransaction(id: number): Observable<Transaction> {
        let url = 'transactions/' + id.toString();
        return this.baseService.get(url);
    }

    public getTransactions(page?, itemsPerPage?): Observable<PaginatedResult<Transaction[]>> {
        let url = 'transactions/';
        return this.baseService.getPaged(url, page, itemsPerPage);
    }

    public getTransactionsToDate(page?, itemsPerPage?, toDate?: string): Observable<PaginatedResult<Transaction[]>> {
        let url = 'transactions/todate/';
        return this.baseService.getPagedToDate(url, page, itemsPerPage, toDate);
    }

    public deleteTransaction(id): Observable<any> {
        let url = 'transactions/' + id.toString();
        return this.baseService.delete(url);
    }

    public updateTransaction(transaction: Transaction) {
        let url = 'transactions/' + transaction.transactionId.toString();
        return this.baseService.put(url, transaction);
    }

    public sell(transaction: Transaction)
    {
        let url = 'transactions/sell';
        return this.baseService.post(url, transaction);
    }

    public buy(transaction: Transaction)
    {
        let url = 'transactions/buy';
        return this.baseService.post(url, transaction);
    }
}