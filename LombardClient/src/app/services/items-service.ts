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
        let url = 'items/' + id.toString();
        return this.baseService.get(url);
    }

    public getAll(page?, itemsPerPage?): Observable<PaginatedResult<Item[]>> {
        let url = 'items/'
        return this.baseService.getPaged(url, page, itemsPerPage);
    }

    public saveNewItem(item: Item): Observable<any> {
        return this.baseService.post("items/", item);
    }

    public deleteItem(itemId: number): Observable<any> {
        let url = 'items/' + itemId.toString();
        return this.baseService.delete(url);
    }
}