const express = require("express");
const createUserTable = require("./data/createUserTable");
const createIncomeTable = require('./data/createIncomeTable')
const createExpenseTable = require('./data/createExpenseTable')
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./route/userRoute");
const errorHandling = require("./middleware/errorHandling");
const loginRoute = require('./route/loginRoute')
const incomeRoute = require('./route/incomeRoute')
const expenseRoute = require('./route/expenseRoute')
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);
app.use('/api', loginRoute)
app.use('/api', incomeRoute)
app.use('/api', expenseRoute)

//error handling middleware
app.use(errorHandling);

// Start server
const startServer = async () => {
	try {
		await createUserTable();
		await createIncomeTable()
		await createExpenseTable()
		app.listen(8000, () => {
			console.log("Server running on port 8000");
		});
	} catch (error) {
		console.error("Failed to start server:", error);
	}
};

startServer();
