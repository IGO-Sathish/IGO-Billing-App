import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './auth/new_Register';
import OldRegister from './auth/Register'
import OldLogin from './auth/Login'
import Login from './auth/new_Login';

const App = () => {

  const [user, setUser] = useState('Guest')

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/OldLogin" element={<OldLogin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/newRegister" element={<OldRegister/>} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

 

    </Router>

  )


}

export default App;
