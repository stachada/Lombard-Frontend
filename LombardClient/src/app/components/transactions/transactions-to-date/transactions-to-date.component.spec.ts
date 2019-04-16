import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsToDateComponent } from './transactions-to-date.component';

describe('TransactionsToDateComponent', () => {
  let component: TransactionsToDateComponent;
  let fixture: ComponentFixture<TransactionsToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
