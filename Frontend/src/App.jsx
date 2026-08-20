import { Routes, Route } from "react-router-dom"
import LoginPage from "./page/LoginPage"
import SignupPage from "./page/SignupPage"
import Dashboard from "./page/Dashboard"
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
  )
}

export default App