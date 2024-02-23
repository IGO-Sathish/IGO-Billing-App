import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import Register from './auth/Register';

import Login from './auth/Login';
import Greet from './auth/Greet';
import DynamicUser from './auth/Component-App/LearnApp'
import ForgotPassword from './auth/ForgotPassword'
import Template from './auth/Invoice/Template.jsx'


const App = () => {
  
  const [user, setUser] = useState('Guest')

  return (


    <Router>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />

        <Route path="/register" element={<Register/>} />
        
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/user" element={<Greet/>} />
        <Route path="/template" element={<Template/>} />
        <Route path="/user:userId" element={<DynamicUser/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

 

    </Router>

  )


}

export default App;
