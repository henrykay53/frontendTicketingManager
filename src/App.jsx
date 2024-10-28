import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


// Home
import Home from './components/Pages/Home';
import Register from './components/Authentication/Register';
import SignIn from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';
function App() {


  return (
    <>

<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>


    
    </>
  )
}

export default App
