import { useState, useEffect } from 'react';
import {deleteTransaction, updateTransaction } from "../api/transaction";
import {getTransactions} from '../api/transaction.js';
export function useTransactions() { 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [transactions, setTransactions] = useState([]);
    const expenses = transactions.filter((transaction) => transaction.type === 'expense').reduce((sum, transaction) => sum + transaction.amount, 0);
    const income = transactions.filter((transaction) =>  transaction.type === "income").reduce((sum, transaction) => sum + transaction.amount, 0);
    const recentTransactions = transactions.toSorted((a, b) => b.id - a.id).slice(0, 5);
    async function fetchTransactions() {
        setLoading(true)
        setError(null)
        try {
            const data = await getTransactions();
            setTransactions(data);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => { 
        getTransactions()
            .then(data => setTransactions(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])
    async function handleDelete(id) {
        try {
            await deleteTransaction(id);
            await fetchTransactions();
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    }
    async function handleTransactionUpdate(id, updatedTransaction) {
        try {
            await updateTransaction(id, updatedTransaction);
            await fetchTransactions();
        } catch (error) {
            console.error('Error updating transaction:', error);
            throw error;
        }
    }
    return { transactions, fetchTransactions, handleDelete, handleTransactionUpdate, expenses, income, recentTransactions, loading, error };
}