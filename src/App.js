import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/navbar';
import AuthNavbar from './components/Navbar/authNavbar';
import Login from './components/Userauthentication/login';
import HeroHome from './components/HeroHome';
import Product from './components/product';
import Cart from './components/Cart';
import About from './ui/About';
import SignUp from './components/Userauthentication/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCart from './components/CartModal';
import { ModalVisibilityProvider } from './components/modal-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Provider store={store}>
            <ModalVisibilityProvider>
            <BrowserRouter>
                <Navbar />
                {isLoggedIn? (
                    <AuthNavbar onLogout={handleLogout} />
                ) : (
                    <Navbar />
                )}


   
   <ShoppingCart/>
  
                <Routes>
                    <Route path="/" element={<HeroHome />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Routes>
              
                <ToastContainer />
            </BrowserRouter>
            </ModalVisibilityProvider>
        </Provider>
      
    );
}

export default App;
