const express = require("express");
const createUserTable = require("./data/createUserTable");
require("dotenv").config();
const cors = require('cors')
const userRoutes = require('./route/userRoute')
const errorHandling = require('./middleware/errorHandling')

const app = express();

// middleware
app.use(express.json())
app.use(cors())

//Routes 
app.use('/api', userRoutes)

//error handling middleware
app.use(errorHandling)

// creating a user table before starting server
createUserTable()

// Start server
const startServer = async () => {
    try {
        await createUserTable();

        app.listen(8000, () => {
            console.log("Server running on port 8000");
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();