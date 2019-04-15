import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServiceBase {
    private readonly BASE_URL = 'http://localhost:5000/api/'

    constructor(private http: HttpClient) { }

    private config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    get(relativeUrl: string): Observable<any> {
        const url = this.BASE_URL + relativeUrl;
        return this.http.get(url);
    }

    getPaged(relativeUrl: string, page?, itemsPerPage?): Observable<PaginatedResult<any>> {
        const paginatedResult: PaginatedResult<any> = new PaginatedResult<any>();

        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        return this.http.get(this.BASE_URL + relativeUrl, { observe: 'response', params })
            .pipe(
                map(response => {
                    paginatedResult.result = response.body;
                    if (response.headers.get('Pagination') != null) {
                        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                    }
                    return paginatedResult;
                })
            );
    }

    post(relativeUrl: string, object: any): Observable<any> {
        const url = this.BASE_URL + relativeUrl;
        return this.http.post(url, JSON.stringify(object), this.config);
    }

    put(relativeUrl: string, object: any): Observable<any> {
        const url = this.BASE_URL + relativeUrl;
        return this.http.put(url, JSON.stringify(object), this.config);
    }

    delete(relativeUrl: string): Observable<any> {
        const url = this.BASE_URL + relativeUrl;
        return this.http.delete(url, this.config);
    }
}