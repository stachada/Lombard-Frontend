import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';
import { Item } from '../models/item';
import { PaginatedResult } from '../models/pagination';

@Injectable({
    providedIn: 'root'
})

export class ItemsService {

    constructor(private baseService: ServiceBase) { }

    public get(id: number): Observable<Item> {
        return this.baseService.get(id.toString());
    }

    public getAll(page?, itemsPerPage?): Observable<PaginatedResult<Item[]>> {
        let url = 'items/'
        return this.baseService.getPaged(url, page, itemsPerPage);
    }
}