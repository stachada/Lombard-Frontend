import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// @Injectable({
//         providedIn: 'root'
// })
// // export class TransacitonsService {
// //     baseUrl: string = environment.apiUrl;

// //     constructor(private http: HttpClient) {}

// //     // getTransaction(): Observable<Transaction[]> {
// //     //     this.http.get(this.baseUrl + 'api/transactions/1')
            
// //     // }

// //     // Service base z base Url:
// //     // config dla header -> application/json -> content type
// //     // get(relativeUlr: string).

// //     // post(relativeUrl: string, object)
// // }