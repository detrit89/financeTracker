export function validateCreateTransaction(data) {
    return (
      typeof data === "object"  && data !== null && (data.type === "income" || data.type === "expense")
    ) && (typeof data.amount === "number" && Number.isInteger(data.amount) && data.amount > 0) && (typeof data.description === "string" && data.description.trim().length > 0) && (typeof data.transaction_date === "string" && data.transaction_date.trim().length > 0)
}

export function validateUpdateTransaction(data) {
   if (typeof data !== "object"  ||  data === null) {
    return false
   }
   if (data.type !== undefined) {
        if (data.type !== "income" && data.type !== "expense") {
            return false
        }
    }
    if (data.amount !== undefined) {
        if (!Number.isInteger(data.amount) || data.amount <= 0) {
            return false
        }
    }
    if(data.description !== undefined) {
        if (typeof data.description !== "string" || data.description.trim().length === 0) {
            return false
        }
    }
    if(data.transaction_date !== undefined) {
        if(typeof data.transaction_date !== "string" || data.transaction_date.trim().length === 0) {
            return false
        }
    }

   return true

}

export function validateTransactionId(id) {
    const numberID = Number(id)
    return (Number.isInteger(numberID) && numberID > 0)
}