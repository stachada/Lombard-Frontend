import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { Injectable } from '@angular/core';
import { ServiceBase } from './service-base';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { PaginatedResult } from '../models/pagination';

@Injectable({
        providedIn: 'root'
})
export class TransacitonsService {

    constructor(private baseService: ServiceBase) {}

    public getTransaction(id: number): Observable<Transaction> {
        let url = 'transactions/' + id.toString();
        return this.baseService.get(url);
    }

    public getTransactions(page?, itemsPerPage?): Observable<PaginatedResult<Transaction[]>> {
        let url = 'transactions/';
        return this.baseService.getPaged(url, page, itemsPerPage);
    }

    
}