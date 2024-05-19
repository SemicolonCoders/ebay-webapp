import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/actions'; 
import APIService from '../utils/services.jsx/ApiService';
import Footer from "../ui/Footer";

function HeroHome() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch(); 
    const containerRef = useRef(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        const apiService = new APIService();
        apiService.get(`products`)
          .then(response => {
                // Assuming the API response structure is { data: { products: [...] } }
                setProducts(response.data.products); 
            })
          .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    const addToCartHandler = (product) => { 
        dispatch(addToCart(product)); 
    };

    return (
        <div className="overflow-hidden rela bg-fuchsia-200">
            <div className="items-center justify-center">
                <div className="text-center"></div>
                    <div className="mt-8 gap-4 overflow-hidden rounded-lg p-4">
                        <h1 className="text-black font-serif rounded-lg text-3xl underline mb-2"></h1>
                        <div ref={containerRef} className="flex gap-4 rounded-lg overflow-x-auto scroll-smooth">
                            {products.map(product => (
                                <div key={product.id} className="flex-none w-60">
                                    <div className="border bg-[#2e3439] text-white rounded-lg p-4">
                                        <img className="w-full touch-pan-x mb-2 h-40 object-cover" src={product.imageUrl} alt={product.title} />
                                        <h3 className="text-sm font-cambria mb-2">{product.title}</h3>
                                        <p className="text-lg font-bold mb-2">
                                            Price: {product.price} 
                                            <button onClick={() => addToCartHandler(product)} className="hover:bg-[#294c70] bg-blue-700 ml-2 text-sm text-white font-seriif py-1 px-2 rounded-full">
                                                Add to Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>

            {/* Description Section */}
            <div className="container mx-auto py-12">
                <h2 className="text-4xl font-bold text-pink-700 mb-4">Welcome to Our ebay Shopping Mart</h2>
        <p className="text-xl font-bold text-rose-600 mb-8">Discover our wide range of products and enjoy a seamless shopping experience...</p>
        <img src="./home.jpg" alt="" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Description Cards */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="./thhh.jpg" alt="Quality Products" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                        <p className="text-gray-300">Check out for are "Summer Season Sale"...</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="./fast-shipping.jpeg" alt="Fast Shipping" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                        <p className="text-gray-300">Enjoy 50% off on shop of 5000 or more.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="./shop.webp" alt="Excellent Customer Service" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Excellent Customer Service</h3>
                        <p className="text-gray-300">Our dedicated customer service team is here to assist you 24/7.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HeroHome;
