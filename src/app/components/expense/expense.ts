import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../service/transaction';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-expense',
  imports: [CommonModule, FormsModule],
  templateUrl: './expense.html',
  styleUrl: './expense.css'
})
export class Expense {
   amount: number = 0;
  category: string = '';

  constructor(private transactionService: TransactionService) {}

  onSubmit() {
    const newTransaction: Transaction = {
      id: Math.random(),
      type: 'expense',
      amount: this.amount,
      category: this.category,
      date: new Date(),
    };
    this.transactionService.addTransaction(newTransaction);
    this.amount = 0;
    this.category = '';
  }

}
