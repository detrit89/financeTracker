import { getDB } from "../db/db.js";

export function getAllTransactions() {
    const db = getDB()
    const statement = db.query(`
        SELECT * FROM transactions
        `)
    return statement.all()
}

export function getTransactionById(id) {
    const db = getDB()
    const statement = db.query(`
        SELECT * FROM transactions
        WHERE id = ?
        `)
    return statement.get(id)
}

export function createTransaction(data) {
    const db = getDB()
    const insertTransactionStatement = db.query(`
        INSERT INTO transactions (type, amount, description, transaction_date, created_at)
        VALUES(?, ?, ?, ?, ?)
        `)
    insertTransactionStatement.run(data.type, data.amount, data.description, data.transaction_date, new Date().toISOString())
}

export function deleteTransaction(id) {
    const db = getDB()
    const deleteStatement = db.query(`
        DELETE FROM transactions
        WHERE id = ?
        `)
    const deleteResult = deleteStatement.run(id)
    if (deleteResult.changes === 0) {
        return false
    }
    return true
}

export function updateTransaction(id, data) {
    const db = getDB()
    const currentTransaction = getTransactionById(id)
    if (currentTransaction === null) {
    return false
}
    const statement = db.query(`
        UPDATE transactions
        SET type = ?,
            amount = ?,
            description = ?,
            transaction_date = ?
        WHERE id = ?
        `)
    const type = data.type !== undefined ? data.type : currentTransaction.type
    const amount = data.amount !== undefined ? data.amount : currentTransaction.amount
    const description = data.description !== undefined ? data.description : currentTransaction.description
    const transaction = data.transaction_date !== undefined ? data.transaction_date : currentTransaction.transaction_date
    const updateResult = statement.run(type, amount, description, transaction, id)
    if (updateResult.changes === 0) {
        return false 
    }
    return true 
}