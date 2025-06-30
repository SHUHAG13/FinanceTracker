import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Income } from './components/income/income';
import { Expense } from './components/expense/expense';
import { GoalComponent } from './components/goal/goal';

export const routes: Routes = [
    { path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'dashboard',component:Dashboard},
    {path:'income',component:Income},
    {path:'expense',component:Expense},
    {path:'goal',component:GoalComponent}

];
