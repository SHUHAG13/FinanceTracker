import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './expense.html',
  styleUrls: ['./expense.css']
})
export class Expense {
  amount: number = 0;
  category: string = '';


  constructor(private transactionService: TransactionService,private router:Router) {}

  onSubmit() {
    const newTransaction: Transaction = {
      id: 0, 
      type: 'expense',
      amount: this.amount,
      category: this.category,
      date: new Date(),
    };

    this.transactionService.addTransaction(newTransaction).subscribe(() => {
      this.amount = 0;
      this.category = '';
       this.router.navigate(['/dashboard']);
    });
  }
}
