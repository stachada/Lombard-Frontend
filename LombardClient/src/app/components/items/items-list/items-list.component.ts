import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items-service';
import { Pagination, PaginatedResult } from 'src/app/models/pagination';
import { ModalDirective, BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-items',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @ViewChild('updateModal') updateModal: ModalDirective;
  items: Item[] = [];
  idToDelete: number;
  pagination: Pagination = <Pagination>{
    itemsPerPage: 20,
    currentPage: 1,
  }
  modalRef: BsModalRef;
  transactionToUpdate: Item = <Item>{};

  constructor(private itemService: ItemsService, private modalService: BsModalService) { }

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

  delete(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(x => this.ngOnInit());
  }

  cancelDeleteItem(): void {
    this.modalRef.hide();
  }

  confirmDeleteItem(): void {
    this.itemService.deleteItem(this.idToDelete).subscribe(x => this.ngOnInit());
    this.modalRef.hide();
  }

  openDeleteItemModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.idToDelete = id;
  }
}
