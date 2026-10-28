import { getTransactionController, getTransactionsController, updateTransactionController, createTransactionController, deleteTransactionController } from "../controllers/financeContollers.js";


export const routes = {
    '/api/transactions': {
        GET: () => getTransactionsController(),
        POST: (req) => createTransactionController(req)
    },
    '/api/transactions/:id': {
        DELETE: (req) => deleteTransactionController(req),
        PATCH: (req) => updateTransactionController(req),
        GET: (req) => getTransactionController(req)
    },
}
