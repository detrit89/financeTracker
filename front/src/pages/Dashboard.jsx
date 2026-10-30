import { SummaryCard } from "../components/Summary";
import { TransactionList } from "../components/TransactionList.jsx";
import { TransactionForm } from "../components/TransactionForm.jsx";
import { useTransactions } from "../hooks/useTransactions.js";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { Header } from "../components/Header.jsx";

export function Dashboard() {
    const {fetchTransactions, handleDelete, handleTransactionUpdate, expenses, income, recentTransactions } = useTransactions();
    return (
        <div className="mx-auto w-full max-w-[1600px] px-4 pb-6 sm:px-6 lg:px-7">
            <Header />
            <div className=" rounded-xl shadow-md bg-[linear-gradient(to_right,rgba(255,255,255,0.85),rgba(255,255,255,0.1)),url('/images/Peaks.png')] bg-cover bg-center bg-no-repeat p-5 sm:p-8 xl:p-10 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
                <div className="flex flex-col gap-2">
                    <p className="text-base sm:text-lg">Good morning,</p>
                    <h1 className="text-3xl font-bold sm:text-4xl">Your finances <br /> at a glance</h1>
                    <p className="text-base sm:text-lg">Track your income and expenses <br /> to build a better tomorrow.</p>
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