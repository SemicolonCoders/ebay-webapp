import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'; 
import { useModalVisibility } from '../modal-context';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
    const cartItems = useSelector(state => state.cartItems);
    const cartItemCount = cartItems.length; 

    const {openModal} = useModalVisibility()
    
    return (
        <nav className="flex flex-wrap items-center justify-between px-4 py-1 bg-gradient-to-r from-white to-pink-950  fixed top-0 w-full ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHcIOXPXpy-MePiSIDNImw3PJlXUucl5-0A&usqp=CAU" alt="L" className="h-10 w-15" />
                    
                    <span className="text-xl font-bold tracking-tight underline"></span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            fillRule="evenodd"
                            d="M3 3h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 6h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V10a1 1 0 011-1zm0 6h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
                <div className="text-md lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0   text-pink-950 font-bold hover:text-blue-700 mr-4">
                        Home
                    </Link>
                    <Link to="/product" className="block mt-4 lg:inline-block lg:mt-0 text-pink-950 font-bold hover:text-blue-700  mr-4">
                        Products
                    </Link>
                    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-pink-950 font-bold hover:text-blue-700  mr-4">
                        About
                    </Link>
                </div>
                <div className="mt-4 lg:mt-0 flex  items-center">
                
                <Link to="/login"></Link>
                    <Link to="/login" className="inline-block  text-white font-bold  hover:text-cyan-300 mr-4">
                     Login
                    </Link>
                    <Link to="/signup" className="inline-block   text-white font-bold  hover:text-cyan-300">
                        Sign Up
                    </Link>
                    <button onClick={openModal} className="relative inline-block text-cyan-300 ml-4">
                        <FaCartPlus  className="w-6 h-6 m-2" />
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-blue-700 text-white rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                        <div className="hidden bg-white text-gray-900 rounded-lg p-2 absolute top-12 right-0 shadow-md z-10">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex items-center mb-1">
                                    <img src={item.image} alt={item.title} className="w-8 h-8 object-cover mr-2" />
                                    <p className="text-sm">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </button>
                </div>
            </div>
           
        </nav>
    );
}

export default Navbar;
