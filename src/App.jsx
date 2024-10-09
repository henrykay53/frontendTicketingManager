import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Register from './components/Authentication/Register';
import SignIn from './components/Authentication/Login';
function App() {


  return (
    <>

<Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>


    
    </>
  )
}

export default App
