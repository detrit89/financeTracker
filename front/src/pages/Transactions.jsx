import { useTransactions } from "../hooks/useTransactions.js";
import { TransactionList } from "../components/TransactionList.jsx";
import { Link } from "react-router-dom";
import { Wallet, TrendingUp, TrendingDown} from "lucide-react";
import { SummaryCard } from "../components/Summary.jsx";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";

export function Transactions() {
    const [filterType, setFilterType] = useState("all")
    const {transactions ,handleDelete, handleTransactionUpdate, income, expenses } = useTransactions();
    const [search, setSearch] = useState("");
    const filteredTransactions = transactions.filter((transaction) =>
        (transaction.description.toLowerCase().includes(search.toLowerCase()) || transaction.type.toLowerCase().includes(search.toLowerCase())) && (filterType === "all" || transaction.type === filterType)
    );
    return (
        <div className="mx-auto w-full max-w-[1600px] px-4 pb-6 sm:px-6 lg:px-7 bg-white dark:bg-slate-950 min-h-screen">
            <header className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 bg-white py-3 dark:bg-slate-950 sm:mb-6 sm:p-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="h-10 w-14 shrink-0 object-contain sm:h-13 sm:w-20" />
                    <span className="text-sm sm:text-base text-slate-900 dark:text-white">Finance Tracker</span>
                </div>
                <nav className="order-last grid w-full grid-cols-3 gap-1 md:order-none md:flex md:w-auto md:gap-4">
                    <Link to="/" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base dark:text-white">Overview</Link>
                    <Link to="/transactions" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base rounded-full bg-gray-100 dark:text-white dark:bg-slate-800">Transactions</Link>
                    <Link to="/settings" className="flex min-h-11 items-center justify-center px-2 py-2 text-sm sm:px-5 sm:text-base dark:text-white">Settings</Link>
                </nav>
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 dark:text-white">
                    <button type="button" className="size-full">K</button>
                </div>
            </header>
            <div className="h-12 rounded-xl sm:h-16 w-full bg-[url('/images/panorama.png')] bg-center bg-no-repeat bg-cover"></div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <SummaryCard  icon={<Wallet className="size-6 text-blue-600"/>} title="Balance" amount={income - expenses} />
                <SummaryCard  icon={<TrendingUp className="size-6 text-green-600" />} title="Income" amount={income} />
                <SummaryCard  icon={<TrendingDown className="size-6 text-red-600" />} title="Expenses" amount={expenses} />
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-lg mt-5 sm:mt-7 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" >
                    <div className="w-full min-w-0 flex-1"><SearchBar search={search} setSearch={setSearch} /></div>
                    <div className="w-full sm:w-auto">
                        <select aria-label="Filter by transaction type" className="min-h-11 w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-white text-slate-900 dark:bg-slate-800 dark:text-white px-4 py-2 sm:w-auto" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option className="text-slate-900 dark:text-white" value="all">All</option>
                            <option className="text-slate-900 dark:text-white" value="income">Income</option>
                            <option className="text-slate-900 dark:text-white" value="expense">Expense</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 min-w-0">
                    <div className="min-w-0">
                        {filteredTransactions.length === 0 ? (
                            <p className="py-10 text-center text-gray-500 dark:text-slate-400">No transaction found</p>
                        ) : (
                            <TransactionList transactions={filteredTransactions} onDelete={handleDelete} onUpdate={handleTransactionUpdate} /> )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}