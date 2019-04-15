import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { Injectable } from '@angular/core';
import { ServiceBase } from './serviceBase';

@Injectable({
        providedIn: 'root'
})
export class TransacitonsService {

    constructor(private baseService: ServiceBase) {}

    // public get(): Observable<Transaction[]> {
    //     return this.baseService.get('/');
    // }

    public get(id: number): Observable<Transaction> {
        return this.baseService.get(id.toString());
    }
}