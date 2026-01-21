// src/app/services/transaction.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction, Goal } from '../models/transaction.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

   getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/transactions`, transaction);
  }

  getDashboardSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions/dashboard`);
  }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.apiUrl}/goals`);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(`${this.apiUrl}/goals`, goal);
  }

  getCategories(): Observable<{id:number, name:string}[]> {
  return this.http.get<{id:number, name:string}[]>(`${this.apiUrl}/category`);
}

}
