import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceBase {
    private BASE_URL = 'http://localhost:64905/'

    constructor(private http: HttpClient) {}

    private config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    get(relativeUrl: string): Observable<any> {
        const url = this.BASE_URL + relativeUrl;
        return this.http.get(url);
    }

    post(relativeUrl: string, object: object) {
        const url = this.BASE_URL + relativeUrl;
        return this.http.post(url, JSON.stringify(object), this.config);
    }
}