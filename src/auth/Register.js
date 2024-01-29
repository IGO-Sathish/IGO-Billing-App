import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {


        e.preventDefault();

        try {
           await auth.createUserWithEmailAndPassword(email, password);
            alert("Email ID Registeredsuccessfullly. Please Login!");
            navigate("/login")

        }
       catch (error) {
            console.log(error);

            alert(error);
        }
    };
    const handleOnChange = (e) =>{
    console.log(e);
    }

    return (
        <div>
            <h2>Register </h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChange} />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChange} />

                <button type="submit">Register</button>
            </form>

        </div>
    );
};

export default Register;
