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
        <div className="m-7">
            <header className="flex items-center justify-between p-4 ">
                <div className="flex items-center gap-3">
                    <img src="/images/WalletIcon.png" alt="Logo" className="w-20 h-13" />
                    <span>Finance Tracker</span>
                </div>
                <nav className="flex gap-4">
                    <Link className="px-5 py-2" to="/">Overview</Link>
                    <Link to="/transactions" className="rounded-full bg-gray-100 px-5 py-2">Transactions</Link>
                    <Link to="/settings" className="px-5 py-2">Settings</Link>
                </nav>
                <div className="rounded-full bg-gray-200 w-7 h-7 flex items-center justify-center">
                    <button>K</button>
                </div>
            </header>
            <div className="h-16 w-full bg-[url('/images/panorama.png')] bg-center bg-no-repeat bg-[length:100%_auto]"></div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <SummaryCard  icon={<Wallet className="size-6 text-blue-600"/>} title="Balance" amount={income - expenses} />
                <SummaryCard  icon={<TrendingUp className="size-6 text-green-600" />} title="Income" amount={income} />
                <SummaryCard  icon={<TrendingDown className="size-6 text-red-600" />} title="Expenses" amount={expenses} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg mt-7">
                <div className="flex items-center gap-4" >
                    <div className="flex-1 min-w-0 shadow-lg"><SearchBar search={search} setSearch={setSearch} /></div>
                    <div>
                        <select className="rounded-lg border border-gray-200 px-4 py-2 shadow-lg" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-5 mt-7">
                    <div className="col-span-6">
                        {filteredTransactions.length === 0 ? (
                            <p className="py-10 text-center text-gray-500">No transaction found</p>
                        ) : (
                            <TransactionList transactions={filteredTransactions} onDelete={handleDelete} onUpdate={handleTransactionUpdate} /> )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}