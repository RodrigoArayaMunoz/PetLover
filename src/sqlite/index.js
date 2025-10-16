import * as sqlite from 'expo-sqlite';

let db

export const initDB = async () => {
    if (!db) {
        db = await sqlite.openDatabaseAsync('petlover.db');
    }
}

export const initSessionTable = async () => {
    await initDB();
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS session (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            localId TEXT,
            email TEXT
        )
    `);
}

export const saveSession = async (localId, email) => {
    await initDB();
    await db.runAsync('DELETE FROM session WHERE localId = '+ localId + ';');
    await db.runAsync('INSERT INTO session (localId, email) VALUES (?, ?)', [localId, email]);
}

export const getSession = async (localId) => {
    await initDB();
    const result = await db.getAllAsync('SELECT * FROM session WHERE localId = ' + localId + ' LIMIT 1;');
    return result.length > 0 ? result[0] : null;
}

export const clearSession = async (localId) => {
    await initDB();
    await db.runAsync('DELETE FROM session WHERE localId = ' + localId + ';');
}



