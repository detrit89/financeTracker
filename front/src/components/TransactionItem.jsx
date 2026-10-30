import { useState } from 'react';

export function TransactionItem({ transaction, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(transaction.description);
    const [amount, setAmount] = useState(transaction.amount);
    const [transactionDate, setTransactionDate] = useState(transaction.transaction_date);

    function handleCancel() {
        setDescription(transaction.description);
        setAmount(transaction.amount);
        setTransactionDate(transaction.transaction_date);
        setIsEditing(false);
    }

    async function handleSave() {
        if (!amount || Number(amount) <= 0 || !description.trim() || !transactionDate) {
            return;
        }

        try {
            await onUpdate(transaction.id, {
                description,
                amount: Number(amount),
                transaction_date: transactionDate,
            });
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating transaction:", error);
        }
    }

    return (
        <tr className="border-b border-gray-200">
            {isEditing ? (
                <>
                    <td className="px-3 py-4">
                        <input
                            type="text"
                            aria-label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 p-2"
                        />
                    </td>
                    <td className="px-3 py-4">
                        <input
                            type="number"
                            aria-label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 p-2"
                        />
                    </td>
                    <td className="px-3 py-4">
                        <span className={transaction.type === "income" ? "text-green-600" : "text-red-500"}>
                            {transaction.type}
                        </span>
                    </td>
                    <td className="px-3 py-4">
                        <input
                            type="date"
                            aria-label="Transaction date"
                            value={transactionDate}
                            onChange={(e) => setTransactionDate(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 p-2"
                        />
                    </td>
                </>
            ) : (
                <>
                    <td className="break-words px-3 py-4 [overflow-wrap:anywhere]">
                        {transaction.description}
                    </td>
                    <td
                        className={`break-words px-3 py-4 font-semibold [overflow-wrap:anywhere] ${
                            transaction.type === "income"
                                ? "text-green-600"
                                : "text-red-500"
                        }`}
                    >
                        {transaction.type === "income" ? "+" : "-"}
                        {transaction.amount}$
                    </td>
                    <td className="px-3 py-4">
                        <span
                            className={`rounded-md px-3 py-1 text-sm ${
                                transaction.type === "income"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-600"
                            }`}
                        >
                            {transaction.type === "income" ? "Income" : "Expense"}
                        </span>
                    </td>
                    <td className="px-3 py-4 text-gray-500">
                        <time dateTime={transaction.transaction_date}>
                            {transaction.transaction_date}
                        </time>
                    </td>
                </>
            )}
            <td className="px-3 py-4">
                <div className="flex flex-wrap items-center gap-2">
                    {isEditing ? (
                        <>
                            <button
                                type="button"
                                onClick={handleSave}
                                className="min-h-11 rounded-lg bg-green-100 px-3 py-2 text-green-700 hover:bg-green-200"
                            >
                                Save
                            </button>

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="min-h-11 rounded-lg bg-gray-100 px-3 py-2 hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="min-h-11 rounded-lg bg-gray-100 px-3 py-2 hover:bg-gray-200"
                            >
                                Edit
                            </button>

                            <button
                                type="button"
                                onClick={() => onDelete(transaction.id)}
                                className="min-h-11 rounded-lg bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200"
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </td>
        </tr>
    );
}
