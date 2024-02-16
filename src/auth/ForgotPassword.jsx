import React, { useState } from 'react'

import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

import signup_image from "../images/signup-image.jpg"

import { Link } from 'react-router-dom';






const New_Login = ({ user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // console.log(email + " " + password);
            navigate("/User:userId");
            setUser(email);
        }

        catch (error) {
            console.log(error);
            alert(error);
        }


    };
    return (
        <div className=' h-screen w-screen flex justify-center items-center ' >
            <div
                class="container flex justify-center items-center max-w-[65%] mx-auto xl:max-w-3xl  bg-white rounded-lg shadow overflow-hidden"
            >
                 <div class="w-full xl:w-1/2 p-10">
                    <form method="post" action="#" onSubmit={handleLogin}>
                        <h1 class=" text-2xl font-bold">Reset password below.</h1>
                        <div>
                            <span class="text-gray-600 text-sm">
                                Don't have an account?
                            </span>
                            <Link to="/login" class="text-gray-700 text-sm font-semibold signin-image-link"> Sign In </Link>

                        </div>
                        <div class="mb-4 mt-6">
                            <label

                                class="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="email"
                            >

                              Name
                            </label>
                            <input
                                class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="email"
                                type="text"
                                placeholder="Your name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div class="mb-6 mt-6">
                            <label
                                class="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="password"
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                   
                        </div>
                        <div class="flex w-full mt-8">
                            <button
                                class="w-full bg-blue-500 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                                type="submit" name="signin" id="signin" value="Login"
                            >
                               Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div class=" justify-center  items-center w-full lg:flex  hidden xl:w-1/2 h-full">

                    <img class="" src={signup_image} alt="sing up" />


                </div>
               
            </div>
        </div>




    );
}

export default New_Login;
