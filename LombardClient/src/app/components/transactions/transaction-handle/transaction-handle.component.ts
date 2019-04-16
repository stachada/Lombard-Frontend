import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Transaction } from 'src/app/models/transaction';
import { TransacitonsService } from '../../../services/transactions-service';
import { ItemsService } from 'src/app/services/items-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-handle',
  templateUrl: './transaction-handle.component.html',
  styleUrls: ['./transaction-handle.component.scss']
})
export class TransactionHandleComponent implements OnInit {
  item: Item = <Item>{};
  transaction: Transaction = <Transaction>{};

  constructor(private transactionsService: TransacitonsService, 
    private itemsService: ItemsService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemsService.get(+params.get('id'))
        .subscribe(i => {
          this.item = i;
          this.transaction.itemId = this.item.itemId;
        });
    });
  }

  sell() {
    this.transactionsService.sell(this.transaction)
      .subscribe(data => this.router.navigate(['/transaction']));
  }

  buy() {
    this.transactionsService.buy(this.transaction)
      .subscribe(data => this.router.navigate(['/transaction']));
  }
}
