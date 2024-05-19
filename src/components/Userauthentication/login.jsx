import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import APIService from '../../utils/services.jsx/ApiService';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if password is at least 6 characters long
        if (password.length < 6) {
            toast.error('password length is at least 6', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Exit the function if password is invalid
        }
        
        const data = {
            email: email,
            password: password
        };
        
        try {
            const Api = new APIService();
            const result = await Api.post('auth/login', false, data);
            console.log(result);
            if (result.access_token) {
                await localStorage.setItem('token', result.access_token); 
                await localStorage.setItem('refreshToken', result.refresh_token);
                setIsLoggedIn(true); // Update isLoggedIn state to true after successful login
                
                toast.success('User logged in successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                });
                navigate('/');
            } else {
                toast.error('user credential is not correct', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                });
            }
        } catch (error) {
            toast.error('user credential is not correct', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "black",
            });
        }
    };

    return (
        <div className="py-16 min-h-screen flex justify-center items-center bg-fuchsia-200  flex-col px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded shadow-md text-black w-full bg-amber-100 max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    
                    
                    LogIn
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-10 px-2 focus:ring-cyan-400 focus:border-cyan-400 block w-full border shadow-sm sm:text-sm border-gray-900 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium  text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 h-10 px-2 focus:ring-teal-500 border focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Login</button>
                    </div>
                    <div className="text-sm text-center text-black">
                        New user? <Link to="/signup" className="hover:underline text-teal-500 focus:outline-none">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
