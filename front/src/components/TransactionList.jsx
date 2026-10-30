import { TransactionItem } from './TransactionItem.jsx'
export function TransactionList({ transactions, onDelete, onUpdate }) {
    return (
        <div className="min-w-0 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-md sm:p-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Transactions</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-slate-400 lg:hidden">Swipe the table to see all columns.</p>
            <div className="mt-2 overflow-x-auto rounded-md focus-visible:outline-2 focus-visible:outline-slate-500" tabIndex={0} role="region" aria-label="Transactions table, scroll horizontally for more columns">
                <table className="w-full min-w-[720px] table-fixed text-left">
                    <thead >
                        <tr className="border-b border-gray-200 dark:border-slate-700">
                            <th className="px-3 py-4 text-slate-900 dark:text-white">Description</th>
                            <th className="px-3 py-4 text-slate-900 dark:text-white">Amount</th>
                            <th className="px-3 py-4 text-slate-900 dark:text-white">Type</th>
                            <th className="px-3 py-4 text-slate-900 dark:text-white">Date</th>
                            <th className="px-3 py-4 text-slate-900 dark:text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} onUpdate={onUpdate} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}