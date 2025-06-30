// src/app/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction, Goal } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private goals: Goal[] = [];

  private transactionsSubject = new BehaviorSubject<Transaction[]>(this.transactions);
  transactions$ = this.transactionsSubject.asObservable();

  private goalsSubject = new BehaviorSubject<Goal[]>(this.goals);
  goals$ = this.goalsSubject.asObservable();

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionsSubject.next(this.transactions);
  }

  addGoal(goal: Goal) {
    this.goals.push(goal);
    this.goalsSubject.next(this.goals);
  }

  getTotalIncome(): number {
    return this.transactions
      .filter(tx => tx.type === 'income')
      .reduce((sum, tx) => sum + tx.amount, 0);
  }

  getTotalExpenses(): number {
    return this.transactions
      .filter(tx => tx.type === 'expense')
      .reduce((sum, tx) => sum + tx.amount, 0);
  }
}
