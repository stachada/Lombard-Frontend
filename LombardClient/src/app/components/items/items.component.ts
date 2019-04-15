import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items-service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  item: Item = <Item>{};

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService
      .getAll()
      .subscribe(x => this.set(x));
  }

  private set(items: Item[]) {
    this.items = items;
  }
}
