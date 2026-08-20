import { Routes, Route } from "react-router-dom"
import LoginPage from "./page/LoginPage"
import SignupPage from "./page/SignupPage"
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/signup" element={<SignupPage />} />
   </Routes>
  )
}

export default App