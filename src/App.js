import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  Navigate } from 'react-router-dom';
import Register from './auth/Register';

import Login from './auth/Login';
import Greet from './auth/Greet';
import DynamicUser from './auth/Components/LearnApp'


const App = () => {
  
  const [user, setUser] = useState('Guest')

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />

        <Route path="/register" element={<Register/>} />
   
        <Route path="/User" element={<Greet/>} />
        <Route path="/User:userId" element={<DynamicUser/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

 

    </Router>

  )


}

export default App;
