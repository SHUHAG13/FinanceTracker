import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Goal } from '../../models/transaction.model';



@Component({
  selector: 'app-goal',
  imports: [CommonModule,FormsModule],
  templateUrl: './goal.html',
  styleUrl: './goal.css'
})
export class GoalComponent {

targetAmount: number = 0;
  currentAmount: number = 0;
  deadline: Date = new Date();

  constructor(private transactionService: TransactionService) {}
 onSubmit() {
  const newGoal: Goal = {
    targetAmount: this.targetAmount,
    currentAmount: this.currentAmount,
    deadline: this.deadline
  };

  this.transactionService.addGoal(newGoal).subscribe(() => {
    this.targetAmount = 0;
    this.currentAmount = 0;
    this.deadline = new Date();
  });
}

    
}

