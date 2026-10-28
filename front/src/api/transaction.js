
const BASE_URL = 'https://financetracker-iwt9.onrender.com/api/transactions'
export async function getTransactions() { 
    const response = await fetch(BASE_URL)
    if(!response.ok) {
        throw new Error('Failed to fetch transactions');
    }
    const data = await response.json();
    return data;
}

export async function createTransaction(transaction) { 
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    });
    if(!response.ok) {
        throw new Error('Failed to create transaction');
    }
}

export async function deleteTransaction(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        
    })
    if(!response.ok) {
        throw new Error('Failed to delete transaction');
    }
}

export async function updateTransaction(id, updatedTransaction) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTransaction)
    })
    if(!response.ok) {
        throw new Error('Failed to update transaction');
    }
}

export async function getTransaction(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    if(!response.ok) {
        throw new Error('Failed to fetch transaction');
    }
    const data = await response.json();
    return data;
}