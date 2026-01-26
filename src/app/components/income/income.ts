import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-income',
  imports: [FormsModule,CommonModule],
  templateUrl: './income.html',
  styleUrl: './income.css'
})
export class Income {
  amount: number = 0;
  category: string = '';
  
  constructor(private transactionService:TransactionService,private router: Router) { 
    
  }
  onSubmit() {
  const newTransaction: Transaction = {
    id: 0, 
    type: 'income',
    amount: this.amount,
    category: this.category,
    date: new Date()
  };

  this.transactionService.addTransaction(newTransaction).subscribe(() => {
    this.amount = 0;
    this.category = '';
    this.router.navigate(['/dashboard']);
  });
}
    

}
