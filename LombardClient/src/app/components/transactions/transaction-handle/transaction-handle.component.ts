import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Transaction } from 'src/app/models/transaction';
import { TransacitonsService } from '../../../services/transactions-service';
import { ItemsService } from 'src/app/services/items-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-handle',
  templateUrl: './transaction-handle.component.html',
  styleUrls: ['./transaction-handle.component.scss']
})
export class TransactionHandleComponent implements OnInit {
  item: Item = <Item>{};
  transaction: Transaction = <Transaction>{};

  constructor(private transactionsService: TransacitonsService, private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemsService.get(+params.get('id'))
        .subscribe(i => {
          this.item = i;
          this.transaction.itemId = this.item.itemId;
          console.log(this.item);
          console.log(this.transaction);
        });
    });
  }

}
