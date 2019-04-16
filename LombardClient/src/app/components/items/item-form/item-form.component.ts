import { Component, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items-service';
import { Item } from 'src/app/models/item';
import { ItemCategory } from 'src/app/models/ItemCategory';
import { CategoryListComponent } from '../../category-list/category-list.component';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  keys = Object.keys(ItemCategory).filter(k => typeof ItemCategory[k as any] === "number");
  @Input() parent: CategoryListComponent
  newItem: Item = <Item>{};

  constructor(private itemService: ItemsService) {
    console.log(this.keys);
  }

  public saveNewItem() {
    this.itemService
      .saveNewItem(this.newItem)
      .subscribe(x => this.parent.ngOnInit());
  }
}
