import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

import signup_image from "../images/signup-image.jpg"

import './new_register_and_login.css'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


const new_Login = () => {
    return (
        <div className="container" >
            <div className="container_i" >
                <section className="sign-in">
                   
                        <div className="signin-content">
                            <div className="signin-image">
                                <img src={signup_image} alt="sing up image" />
                                <Link to="/register" className='signin-image-link' >Create an account</Link>
                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="login-form">
                                    <div className="form-group">
                                        <label for="email"><MdEmail /></label>
                                        <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                    <label for="pass"><FaLock /></label>
                                        <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                    </div>
                                    <div className="form-group D_f">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                        <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                    </div>
                                </form>
                                {/* <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    
                </section>
            </div>

        </div>
    );
}

export default new_Login
