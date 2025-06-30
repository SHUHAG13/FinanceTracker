import { Component, model, OnInit } from '@angular/core';
 import { TransactionService } from './../../service/transaction';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
 
templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  constructor(private transaction:TransactionService) {}
  totalIncome: number = 0;
  totalExpenses: number = 0;
  netBalance: number = 0;

  ngOnInit() {
    this.transaction.transactions$.subscribe(transactions => {
      this.totalIncome = this.transaction.getTotalIncome();
      this.totalExpenses = this.transaction.getTotalExpenses();
      this.netBalance = this.totalIncome - this.totalExpenses;
    });
  }
}
