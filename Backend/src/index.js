const express = require("express");
const app = express();
const cors = require("cors");

const {
    createUserTable,
    createBudgetTable,
    createExpenseTable,
	createIncomeTable
} = require("./data");
require("dotenv").config();


// import  routes 
const  { 
	loginRoute, 
	incomeRoute, 
	expenseRoute, 
	userRoutes, 
	budgetRoute
} = require('./route')
const errorHandling = require("./middleware/errorHandling");


// middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);
app.use('/api', loginRoute)
app.use('/api', incomeRoute)
app.use('/api', expenseRoute)
app.use('/api', budgetRoute)

//error handling middleware
app.use(errorHandling);

// Start server
const startServer = async () => {
	try {
		await createUserTable();
		await createIncomeTable()
		await createExpenseTable()
		await createBudgetTable()
		app.listen(8000, () => {
			console.log("Server running on port 8000");
		});
	} catch (error) {
		console.error("Failed to start server:", error);
	}
};

startServer();
