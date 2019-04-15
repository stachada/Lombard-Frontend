import { Component, OnInit } from '@angular/core';
import { TransacitonsService } from '../../../services/transactions-service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  private transaction: Transaction = <Transaction>{};

  constructor(private service: TransacitonsService) { }

  ngOnInit() {
    this.service.getTransaction(1).subscribe(t => {
      this.transaction = t;
      console.log(this.transaction);
    });
  }
}
