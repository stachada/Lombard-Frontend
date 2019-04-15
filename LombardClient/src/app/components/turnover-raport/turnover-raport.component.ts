import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-turnover-raport',
  templateUrl: './turnover-raport.component.html',
  styleUrls: ['./turnover-raport.component.css']
})
export class TurnoverRaportComponent implements OnInit { 
  startDate: Date;
  endDate: Date;

  turnover: number;
  constructor(private reportService: ReportService) {
  }

  ngOnInit(): void {
  }

  public calculateTurnover() {
    this.reportService
    .getTurnover(this.startDate, this.endDate)
    .subscribe(x => this.turnover = x);
  }

}
