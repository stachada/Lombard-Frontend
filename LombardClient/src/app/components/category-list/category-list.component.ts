import { Component, OnInit } from '@angular/core';
import { CategoryReportItem } from 'src/app/models/category-report-item';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: CategoryReportItem[] = [];
  category: CategoryReportItem = <CategoryReportItem>{};

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService
      .getAllCategories()
      .subscribe(x => this.set(x));
  }

  private set(categories: CategoryReportItem[]) {
    this.categories = categories;
  }
}
