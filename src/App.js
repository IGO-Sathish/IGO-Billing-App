import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import NewRegister from './auth/new_Register'

const App = () => {

  const [user, setUser] = useState('Guest')

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/newRegister" element={<NewRegister/>} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

 

    </Router>

  )


}

export default App;
