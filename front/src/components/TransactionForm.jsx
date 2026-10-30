import {useState} from "react";
import { createTransaction } from "../api/transaction";

export function TransactionForm({onTransactionCreated}) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('expense');
    const [transactionDate, setTransactionDate] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        if (!amount || Number(amount) <= 0 || !description.trim() || !transactionDate) {
            return;
        }
        try {
            const newTransaction = {
                type, amount: Number(amount), description, transaction_date: transactionDate
            };
            await createTransaction(newTransaction);
            setAmount('')
            setDescription('')
            setType('expense')
            setTransactionDate('')
            await onTransactionCreated()
        } catch (error) {
            console.error('Error creating transaction:', error);
        }
        
    }
    return (
        <div className="min-w-0 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-md flex flex-col gap-4">
            <p className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Add New Transaction</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-900 dark:text-white" htmlFor="description">Description</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="min-h-11 w-full text-slate-900 dark:text-white min-w-0 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2" placeholder="e.g. Groceries, Salary, etc."/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-900 dark:text-white" htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="min-h-11 w-full min-w-0 rounded-lg border border-gray-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 text-slate-900 dark:text-white" placeholder="$0.00" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-900 dark:text-white" htmlFor="type">Type</label>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="min-h-11 w-full min-w-0 rounded-lg border border-gray-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 text-slate-900 dark:text-white">
                        <option className="text-slate-900 dark:text-white" value="expense">Expense</option>
                        <option className="text-slate-900 dark:text-white" value="income">Income</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-900 dark:text-white" htmlFor="transactionDate">Transaction Date</label>
                    <input type="date" id="transactionDate" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} className="min-h-11 w-full min-w-0 rounded-lg border border-gray-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 text-slate-900 dark:text-white"/>
                </div>
                <button type="submit" className="min-h-11 rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition-colors hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white">Add Transaction</button>
            </form>
        </div>
        
    )
}