import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-profit-raport',
  templateUrl: './profit-raport.component.html',
  styleUrls: ['./profit-raport.component.css']
})
export class ProfitRaportComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  profit: number;
  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
  }

  public calculateProfit() {
    this.reportService
    .getProfit(this.startDate, this.endDate)
    .subscribe(x => this.profit = x);
  }
}
