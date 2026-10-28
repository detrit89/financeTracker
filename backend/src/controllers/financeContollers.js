import { createTransaction, deleteTransaction, getAllTransactions, getTransactionById, updateTransaction } from "../repositories/financeRepositories.js";
import { validateCreateTransaction, validateTransactionId, validateUpdateTransaction } from "../validators/financeValidators.js";

export function getTransactionsController() {
   const transactions = getAllTransactions()
   return Response.json(transactions)
}

export function getTransactionController(req) {
    try {
        const id = req.params.id
        if (!validateTransactionId(id)) {
            return Response.json({ error: "Invalid transaction id" }, { status: 400 })
        }
        const transaction = getTransactionById(id)
        if (!transaction) {
            return Response.json({ error: "Transaction not found" }, { status: 404 })
        }
        return Response.json(transaction)
    } catch {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function createTransactionController(req) {
    try {
        const body = await req.json()
        if (!validateCreateTransaction(body)) {
            return Response.json({ error: 'Bad Request' }, { status: 400 });
        }
        createTransaction(body)
        
        return Response.json({success: true}, {status: 201})
    } catch {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });

    }
    
}

export async function updateTransactionController(req) {
    try {
        const id = req.params.id
        if (!validateTransactionId(id)) {
            return Response.json({ error: "Invalid transaction id" }, { status: 400 })
        }
        const body = await req.json()
        if (!validateUpdateTransaction(body)) {
            return Response.json({ error: 'Bad Request' }, { status: 400 });
        }
        const updated = updateTransaction(id, body)
        if(updated === false) {
            return Response.json({ error: "Transaction not found" }, { status: 404 })
        } 
        return Response.json({success: true}, {status: 200})
    } catch {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


export function deleteTransactionController(req) {
    try {
        const id = req.params.id
     if (!validateTransactionId(id)) {
            return Response.json({ error: "Invalid transaction id" }, { status: 400 })
    }
    const deleted = deleteTransaction(id)
    if(deleted === false) {
        return Response.json({ error: "Transaction not found" }, { status: 404 })
    }
    return Response.json({success: true}, {status: 200})
    } catch {
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}