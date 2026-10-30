import { SummaryCard } from "../components/Summary";
import { TransactionList } from "../components/TransactionList.jsx";
import { TransactionForm } from "../components/TransactionForm.jsx";
import { useTransactions } from "../hooks/useTransactions.js";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Dashboard() {
    const {fetchTransactions, handleDelete, handleTransactionUpdate, expenses, income, recentTransactions } = useTransactions();
    return (
        <div className="mx-auto w-full max-w-[1600px] min-h-screen px-4 pb-6 sm:px-6 lg:px-7 bg-white dark:bg-slate-950">
            <header className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 bg-white py-3 dark:bg-slate-950 sm:mb-6 sm:p-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="h-10 w-14 shrink-0 object-contain sm:h-13 sm:w-20" />
                    <span className="text-sm sm:text-base text-slate-900 dark:text-white">Finance Tracker</span>
                </div>
                <nav className="order-last grid w-full grid-cols-3 gap-1 md:order-none md:flex md:w-auto md:gap-4">
                    <Link to="/" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base rounded-full bg-gray-100 dark:text-white dark:bg-slate-800">Overview</Link>
                    <Link to="/transactions" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base  dark:text-white">Transactions</Link>
                    <Link to="/settings" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base dark:text-white">Settings</Link>
                </nav>
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 dark:text-white">
                    <button type="button" className="size-full">K</button>
                </div>
            </header>
            <div className=" rounded-xl shadow-md bg-[linear-gradient(to_right,rgba(255,255,255,0.85),rgba(255,255,255,0.1)),url('/images/Peaks.png')] bg-cover bg-center bg-no-repeat p-5 sm:p-8 xl:p-10 flex flex-col justify-between gap-6 xl:flex-row xl:items-end dark:bg-[linear-gradient(to_right,rgba(2,6,23,0.85),rgba(2,6,23,0.1)),url('/images/NightPeaks.png')]">
                <div className="flex flex-col gap-2">
                    <p className="text-base sm:text-lg text-slate-900 dark:text-white">Good morning,</p>
                    <h1 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">Your finances <br /> at a glance</h1>
                    <p className="text-base sm:text-lg text-slate-900 dark:text-white">Track your income and expenses <br /> to build a better tomorrow.</p>
                </div>
                <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 xl:w-3/4">
                    <SummaryCard  icon={<Wallet className="size-6 text-blue-600"/>} title="Balance" amount={income - expenses} />
                    <SummaryCard  icon={<TrendingUp className="size-6 text-green-600" />} title="Income" amount={income} />
                    <SummaryCard  icon={<TrendingDown className="size-6 text-red-600" />} title="Expenses" amount={expenses} />
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 items-start gap-5 lg:grid-cols-3 sm:mt-7">
                <div className="min-w-0 lg:col-span-2">
                    <TransactionList transactions={recentTransactions} onDelete={handleDelete} onUpdate={handleTransactionUpdate} />
                </div>
                <div className="min-w-0">
                    <TransactionForm onTransactionCreated={fetchTransactions}/>
                </div>
            </div>
        </div>
    )
}