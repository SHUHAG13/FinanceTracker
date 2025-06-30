export interface Transaction {
    id: number;
    type: 'income' | 'expense';
    amount: number;
    category: string;
    date: Date;
}
export interface Goal{
    targetAmount: number;
    currentAmount: number;
    deadline: Date;
}