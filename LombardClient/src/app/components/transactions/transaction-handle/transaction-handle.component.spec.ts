import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHandleComponent } from './transaction-handle.component';

describe('TransactionHandleComponent', () => {
  let component: TransactionHandleComponent;
  let fixture: ComponentFixture<TransactionHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
