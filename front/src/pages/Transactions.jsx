import { useTransactions } from "../hooks/useTransactions.js";
import { TransactionList } from "../components/TransactionList.jsx";
import { Header } from "../components/Header.jsx";
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
        <div className="mx-auto w-full max-w-[1600px] px-4 pb-6 sm:px-6 lg:px-7">
            <Header />
            <div className="h-12 rounded-xl sm:h-16 w-full bg-[url('/images/panorama.png')] bg-center bg-no-repeat bg-cover"></div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <SummaryCard  icon={<Wallet className="size-6 text-blue-600"/>} title="Balance" amount={income - expenses} />
                <SummaryCard  icon={<TrendingUp className="size-6 text-green-600" />} title="Income" amount={income} />
                <SummaryCard  icon={<TrendingDown className="size-6 text-red-600" />} title="Expenses" amount={expenses} />
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg mt-5 sm:mt-7 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" >
                    <div className="w-full min-w-0 flex-1"><SearchBar search={search} setSearch={setSearch} /></div>
                    <div className="w-full sm:w-auto">
                        <select aria-label="Filter by transaction type" className="min-h-11 w-full rounded-lg border border-gray-200 px-4 py-2 sm:w-auto" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 min-w-0">
                    <div className="min-w-0">
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