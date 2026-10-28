import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
let database

export function initDB() {
    if (database) {
        return database
    }

    mkdirSync("data", {recursive: true})
    database = new Database("data/finance.sqlite")

    database.exec(`
        CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY,
        type TEXT NOT NULL,
        amount INTEGER NOT NULL,
        description TEXT NOT NULL,
        transaction_date TEXT NOT NULL,
        created_at TEXT NOT NULL
        )
        `)
    return database
}

export function getDB() {
    if(!database) {
        throw new Error('Database is not initialized');
    }
    return database
}

export function closeDb() {
  if (database) {
    database.close();
    database = null;
  }
}