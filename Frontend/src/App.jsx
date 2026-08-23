import { Routes, Route } from "react-router-dom"
import {
	LoginPage,
	SignupPage,
	Dashboard,
	IncomePage,
	ExpensePage,
	SavingPage,
	Transaction

} from './pages'
import BudgetPage from "./pages/BudgetPage"
import CreateBudget from "./components/budget/CreateBudget"
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/income" element={<IncomePage />} />
    <Route path="/expenses" element={<ExpensePage />} />
    <Route path="/savings" element={<SavingPage />} />
    <Route path="/transactions" element={<Transaction />} />
    <Route path="/budgets" element={<BudgetPage />} />
    <Route path="/budgets/new" element={<CreateBudget />} />
   </Routes>
  )
}

export default App