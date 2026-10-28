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
        <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col gap-4">
            <p className="text-xl font-semibold tracking-tight">Add New Transaction</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="description">Description</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded-lg" placeholder="e.g. Groceries, Salary, etc."/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 rounded-lg" placeholder="$0.00" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="type">Type</label>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded-lg">
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold" htmlFor="transactionDate">Transaction Date</label>
                    <input type="date" id="transactionDate" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} className="border p-2 rounded-lg"/>
                </div>
                <button type="submit" className="rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition-colors hover:bg-slate-800">Add Transaction</button>
            </form>
        </div>
        
    )
}