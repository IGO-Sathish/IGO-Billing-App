// Login.js

import React, { useState } from 'react';
import { auth } from './firebase'; // Make sure the path is correct
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './new_Register'

// ... (rest of the code remains the same)


const Login = ({user,setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log(email+" " +password);
            navigate("/");
            setUser(email);
        }

        catch (error) {
            console.log(error);
            alert(error);
        }


    };

    return (
        <div>
                 
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
