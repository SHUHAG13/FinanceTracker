import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-expense',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './expense.html',
  styleUrls: ['./expense.css']
})
export class Expense {
  amount: number = 0;
  category: string = '';

  constructor(private transactionService: TransactionService) {}

  onSubmit() {
    const newTransaction: Transaction = {
      id: 0, // backend will generate
      type: 'expense',
      amount: this.amount,
      category: this.category,
      date: new Date(),
    };

    this.transactionService.addTransaction(newTransaction).subscribe(() => {
      this.amount = 0;
      this.category = '';
    });
  }
}
