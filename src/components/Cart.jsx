
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (!isNaN(quantity) && parseInt(quantity) > 0) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  return (
    <div className=" bg-fuchsia-200 text-white min-h-screen flex flex-col mt-10 p-4">
      <h2 className="text-3xl font-bold mt-10 mb-4 text-center text-black">Check your bag!</h2>
      <ul className="w-full space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 py-4">
            <div className="flex items-center mb-4 md:mb-0 md:ml-0">
              <img src={item.image} alt={item.title} className="w-20 h-28 object-cover mr-4" />
              <div>
                <h3 className="text-lg text-black font-semibold">{item.title}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-black mr-2">Quantity:</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="w-16 border text-black border-gray-400 rounded px-2 py-1"
                    min="1"
                    max="100"
                  />
                </div>
              </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className="text-black font-semibold mt-2 md:mt-0">Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-auto text-center">
        <button
          type="submit"
          className="hover:bg-pink-400 bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-6 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
