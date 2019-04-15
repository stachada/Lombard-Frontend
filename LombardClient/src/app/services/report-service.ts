import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './service-base';
import { CategoryReportItem } from '../models/category-report-item';

@Injectable({
    providedIn: 'root'
})

export class ReportService {

    constructor(private baseService: ServiceBase) { }
/*
    public get(id: number): Observable<CategoryReportItem> {
        return this.baseService.get(id.toString());
    }
*/
    public getAllCategories(): Observable<CategoryReportItem[]> {
        return this.baseService.get('/reports/categories');
    }
}