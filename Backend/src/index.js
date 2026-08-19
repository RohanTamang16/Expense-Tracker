const express = require("express");
const { Client } = require("pg");
require("dotenv").config();

const app = express();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const testDatabase = async () => {
    try {
        await client.connect();

        const result = await client.query(`
            SELECT
                current_database(),
                current_user,
                inet_server_addr(),
                inet_server_port(),
                version()
        `);

        console.log(result.rows[0]);

        await client.end();
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

testDatabase();

app.listen(8000, () => {
    console.log("Server running on port 8000");
});