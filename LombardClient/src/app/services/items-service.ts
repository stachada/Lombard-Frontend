import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './servicebase';
import { Item } from '../models/item';

@Injectable({
    providedIn: 'root'
})

export class ItemsService {

    constructor(private baseService: ServiceBase) { }

    public get(id: number): Observable<Item> {
        return this.baseService.get(id.toString());
    }
}