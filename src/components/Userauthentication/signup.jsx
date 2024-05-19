import { useState } from 'react';

import { Link,  useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APIService from '../../utils/services.jsx/ApiService';

function SignUp() {
    const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        const data={
            name: name,
            email: email,
            password:password,
            avatar: "https://picsum.photos/800"
              }

              if (password.length < 6) {
                toast.error('password length is at least 6 ', {
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
          
        try {
            const Api= new APIService();
            Api.post('users/',false,data
            )
           
            toast.success('User registeration  successfull', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
            setEmail('');
            setPassword('');
            setName('');
            
            
               navigate('/') ;

        } catch (error) {
            toast.error('user credencial is not correct', {
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
    }

    return (
        <div className=" w-full min-h-screen flex bg-fuchsia-200 justify-center items-center ">
            <div className="p-8 rounded bg-amber-100 shadow-lg w-96 mt-16 ">
           

                <h2 className="text-2xl font-bold text-black text-center mb-4"> Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-black sup">Name</label>
                        <input
                            type="text"
                            placeholder="firstname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 h-6 focus:ring-teal-500 pl-2 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-900 border rounded-md"
                            required
                        />
                    </div>
                   
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-6 focus:ring-teal-500 focus:border-teal-500 pl-2 block w-full shadow-sm sm:text-sm border border-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='password'
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 h-6 focus:ring-teal-500 pl-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-900 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 justify-self-auto focus:ring-indigo-500">Sign Up</button>
                    </div>

                    <div className="text-sm text-black">
                        Already have an account? <Link to="/login" className="text-teal-500 hover:underline focus:outline-none">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
