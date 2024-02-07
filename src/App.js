import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './auth/Register';

import Login from './auth/Login';
import Greet from './auth/Greet';
import Dynamic_User from './auth/Dynamic_User'


const App = () => {
  
  const [user, setUser] = useState('Guest')

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />

        <Route path="/register" element={<Register/>} />
   
        <Route path="/User" element={<Greet/>} />
        <Route path="/User:userId" element={<Dynamic_User/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

 

    </Router>

  )


}

export default App;
