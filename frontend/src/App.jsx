import React from 'react'
import { BrowserRouter as Router ,  Routes, Route , Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Dashboard.jsx/Home'
import Income from './pages/Dashboard.jsx/Income'
import Expense from './pages/Dashboard.jsx/Expense'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/signup' exact element={<SignUp />}/>
          <Route path='/dashboard' exact element={<Home />}/>
          <Route path='/income' exact element={<Income />}/>
          <Route path='/expenses' exact element={<Expense />}/>

         
        </Routes>
      </Router>
    </div>
  )
}

const Root = () => {
    // check if token exists in local storage
    const isAuthenticated  = !!localStorage.getItem('token')
    
    //redirect to dashboard if authenticated , otherwise redirect to login
    return isAuthenticated ? 
    <Navigate to='/dashboard' /> : 
    <Navigate to='/login' />
}

export default App