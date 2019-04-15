import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items-service';
import { Pagination, PaginatedResult } from 'src/app/models/pagination';

@Component({
  selector: 'app-items',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];
  pagination: Pagination = <Pagination>{
    itemsPerPage: 20,
    currentPage: 1,
  }

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.getAll(1, 20)
      .subscribe((data: PaginatedResult<Item[]>) => {
        this.items = data.result;
        this.pagination = data.pagination;
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadItem(this.pagination.currentPage);
  }

  loadItem(currentPage: number) {
    this.itemService.getAll(currentPage, 20)
      .subscribe((data: PaginatedResult<Item[]>) => {
        this.items = data.result;
        this.pagination = data.pagination;
      });
  }
}
