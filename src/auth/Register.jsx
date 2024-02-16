import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


import signup_image from "../images/signup-image.jpg"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import '../auth/styleRegisterLogin.css'



import { Link} from 'react-router-dom';



const New_Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Basic input validation
            if (!name || !email || !password) {
                alert("Please provide all required information.");
                return;
            }

            // You can add more specific validation if needed

            await auth.createUserWithEmailAndPassword(email, password);
            alert("Email ID registered successfully. Please login!");
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="container_i" >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form" onSubmit={handleRegister}>
                            <div className="form-group">
                                <label htmlFor="name"><FaUser /></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><MdEmail /></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><FaLock /></label>
                                <input type="password" name="password" id="password" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re_pass"><MdLockOutline /></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group D_f">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term">I agree all statements in <a href="https://igob.netlify.app" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src={signup_image} alt="sign up" />
                        <Link to="/login" className="signup-image-link">I already have an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New_Register;