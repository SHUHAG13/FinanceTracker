import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income',
  imports: [FormsModule,CommonModule],
  templateUrl: './income.html',
  styleUrl: './income.css'
})
export class Income {
  amount: number = 0;
  category: string = '';
  constructor(private transactionService:TransactionService) { }
  onSubmit() {
    const newTransaction = {
      id: Math.random(), // Random ID for simplicity
      type: "income" as "income",
      amount: this.amount,
      category: this.category,
      date: new Date()
    };
    this.transactionService.addTransaction(newTransaction);
    this.amount = 0; // Reset the form
    this.category = '';
  }

}
