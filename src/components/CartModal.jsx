import React from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Minus, Plus, X } from 'lucide-react';
import { Fragment } from 'react';
import { useModalVisibility } from './modal-context';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { isModalVisible, closeModal } = useModalVisibility();
  const cartItems = useSelector((state) => state.cartItems);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity < 5) {
      dispatch(updateQuantity(itemId, currentQuantity + 1));
      // Calculate and set the new total price for the item
      const newItem = cartItems.find(item => item.id === itemId);
      if (newItem) {
        newItem.totalPrice = newItem.price * (newItem.quantity + 1);
      }
    }
  };

  const handleDecreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity(itemId, currentQuantity - 1));
      // Calculate and set the new total price for the item
      const newItem = cartItems.find(item => item.id === itemId);
      if (newItem) {
        newItem.totalPrice = newItem.price * (newItem.quantity - 1);
      }
    } else {
      handleRemove(itemId);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice || 0, 0); // Use totalPrice if available
  };

  return (
    <Transition show={isModalVisible} as={Fragment}>
      <Dialog className="relative z-[100000]" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-amber-100 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeModal}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <X className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        {cartItems?.length === 0? (
                          <p className="text-center text-gray-500">
                            Your cart is empty.
                          </p>
                        ) : (
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems?.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{product.title}</h3>
                                        <p className="ml-4">{`₹ ${getTotalPriceForProduct(product)}`}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center">
                                        <button
                                          type="button"
                                          className="flex items-center justify-center w-8 h-8 border rounded-full text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                          onClick={() => handleDecreaseQuantity(product.id, product.quantity)}
                                        >
                                          <Minus className="w-5 h-5" />
                                        </button>
                                        <p className="mx-4 text-gray-500">
                                          Qty {product.quantity}
                                        </p>
                                        <button
                                          type="button"
                                          className="flex items-center justify-center w-8 h-8 border rounded-full text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                          onClick={() => handleIncreaseQuantity(product.id, product.quantity)}
                                        >
                                          <Plus className="w-5 h-5" />
                                        </button>
                                      </div>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() => handleRemove(product.id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Helper function to get the total price for a specific product
const getTotalPriceForProduct = (product) => {
  return product.totalPrice || product.price;
};
