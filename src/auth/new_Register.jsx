import React from "react"
import signup_image from "../images/signup-image.jpg"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

import './new_register.css'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


const new_Register = () => {

    return (

        <div className='container'>
            <div className="container_i" >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><FaUser /></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="email"><MdEmail /></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label for="pass"><FaLock /></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><MdLockOutline /></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group D_f">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term">I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src={signup_image} alt="sing up image"/>
                        <Link to="/" className="signup-image-link" >I have already account</Link>

                    </div>
                </div>


            </div>


        </div>







    );


}

export default new_Register;