import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  newItem: Item = <Item>{};

  constructor(private itemService: ItemsService) { }

  public saveNewItem() {
    this.itemService
      .saveNewItem(this.newItem)
      .subscribe(x => x);
  }
}
