import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';
import { Item } from '../models/item';

@Injectable({
    providedIn: 'root'
})

export class ItemsService {

    constructor(private baseService: ServiceBase) { }

    public get(id: number): Observable<Item> {
        let url = 'items/' + id.toString();
        return this.baseService.get(url);
    }

    public getAll(): Observable<Item[]> {
        return this.baseService.get('/items');
    }
}