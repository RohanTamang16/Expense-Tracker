const {Client} = require('pg')
const dotenv = require('dotenv').config()

const client = new Client({
     user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: "postgres",
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

const createDatabase = async () => {
    try {
        await client.connect()

        console.log("Connected to postgres")

        const result = await client.query(
            `SELECT 1 FROM pg_database WHERE datname = 'expense_tracker'`
        );

        if(result.rows.length === 0)
        {
            await client.query("CREATE DATABASE expense_tracker")
            console.log("expense_tracker databse created")
        }else{
            console.log("Database expense_tracker already exists")
        }
        
        await client.end()
    } catch (error) {
        console.error("Database initialization failed: ", error)
        await client.end()
    }
}
createDatabase()