import { TransactionItem } from './TransactionItem.jsx'
export function TransactionList({ transactions, onDelete, onUpdate }) {
    return (
        <div className=" border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold tracking-tight">Transactions</h2>
            <table className="w-full table-fixed text-left">
                <thead >
                    <tr className="border-b border-gray-200">
                        <th className="px-3 py-4">Description</th>
                        <th className="px-3 py-4">Amount</th>
                        <th className="px-3 py-4">Type</th>
                        <th className="px-3 py-4">Date</th>
                        <th className="px-3 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} onUpdate={onUpdate} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}