import { SummaryCard } from "../components/Summary";
import { TransactionList } from "../components/TransactionList.jsx";
import { TransactionForm } from "../components/TransactionForm.jsx";
import { useTransactions } from "../hooks/useTransactions.js";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Dashboard() {
    const {fetchTransactions, handleDelete, handleTransactionUpdate, expenses, income, recentTransactions } = useTransactions();
    return (
        <div className="m-7 ">
            <header className="flex items-center justify-between p-4 ">
                <div className="flex items-center gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="w-20 h-13" />
                    <span>Finance Tracker</span>
                </div>
                <nav className="flex gap-4">
                    <Link to="/" className="rounded-full bg-gray-100 px-5 py-2">Overview</Link>
                    <Link to="/transactions" className="px-5 py-2">Transactions</Link>
                    <Link to="/settings" className="px-5 py-2">Settings</Link>
                </nav>
                <div className="rounded-full bg-gray-200 w-7 h-7 flex items-center justify-center">
                    <button>K</button>
                </div>
            </header>
            <div className=" rounded-xl shadow-md bg-[linear-gradient(to_right,rgba(255,255,255,0.85),rgba(255,255,255,0.1)),url('/images/Peaks.png')] bg-cover bg-center bg-no-repeat p-10 flex justify-between items-end gap-5">
                <div className="flex flex-col gap-2">
                    <p className="text-lg">Good morning,</p>
                    <h1 className="text-4xl font-bold">Your finances <br /> at a glance</h1>
                    <p className="text-lg">Track your income and expenses <br /> to build a better tomorrow.</p>
                </div>
                <div className="grid grid-cols-3 w-3/4  gap-5">
                    <SummaryCard  icon={<Wallet className="size-6 text-blue-600"/>} title="Balance" amount={income - expenses} />
                    <SummaryCard  icon={<TrendingUp className="size-6 text-green-600" />} title="Income" amount={income} />
                    <SummaryCard  icon={<TrendingDown className="size-6 text-red-600" />} title="Expenses" amount={expenses} />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-5 mt-7">
                <div className="col-span-4">
                    <TransactionList transactions={recentTransactions} onDelete={handleDelete} onUpdate={handleTransactionUpdate} />
                </div>
                <div className="col-span-2">
                    <TransactionForm onTransactionCreated={fetchTransactions}/>
                </div>
            </div>
        </div>
    )
}