import { Component, model, OnInit } from '@angular/core';
 import { TransactionService } from './../../service/transaction';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,HttpClientModule],
 
templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  constructor(private transaction:TransactionService) {}
  totalIncome: number = 0;
  totalExpenses: number = 0;
  netBalance: number = 0;
ngOnInit() {
  this.transaction.getDashboardSummary().subscribe(summary => {
    this.totalIncome = summary.totalIncome;
    this.totalExpenses = summary.totalExpense;
    this.netBalance = summary.netBalance;
  });
}

  }
