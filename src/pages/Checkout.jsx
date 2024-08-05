import React, { useContext } from 'react';
import { CartContext } from '../constants/CartContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Checkout = () => {
    const { cartItems, productsArray, removeFromCart, getTotalCartAmount } = useContext(CartContext);
    const navigate = useNavigate();
    const deliveryFee = 10;
    const subtotal = parseFloat(getTotalCartAmount());
    const total = subtotal + deliveryFee;

    return (
        <div>
            <NavBar />
            <div className="mt-12">
                <div className="grid grid-cols-6 gap-2 sm:gap-4 items-center text-center font-semibold mb-4 text-xs sm:text-sm md:text-base">
                    <p>Item</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className="my-4 border-gray-300" />
                {productsArray.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} className="mb-4">
                                <div className="grid grid-cols-6 gap-2 sm:gap-4 items-center text-center text-xs sm:text-sm md:text-base">
                                    <p className="truncate">{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                    <p 
                                        onClick={() => removeFromCart(item._id)} 
                                        className="cursor-pointer text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-600 text-xs sm:text-sm md:text-base"
                                    >
                                        Remove
                                    </p>
                                </div>
                                <hr className="my-4 border-gray-300" />
                            </div>
                        );
                    }
                })}
            </div>

            <div className="p-4 md:p-6 mt-8 flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="cart-total flex-1 flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Cart Total</h2>
                    <div>
                        <div className="flex justify-between mb-2 text-xs sm:text-sm md:text-base">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <hr className="my-2 border-gray-300" />

                        <div className="flex justify-between my-2 text-xs sm:text-sm md:text-base">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee.toFixed(2)}</p>
                        </div>
                        <hr className="my-2 border-gray-300" />

                        <div className="flex justify-between my-2 text-xs sm:text-sm md:text-base">
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : total.toFixed(2)}</b>
                        </div>
                    </div>
                    <button 
                        onClick={() => navigate('/order')} 
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full text-xs sm:text-sm md:text-base"
                    >
                        Proceed to Checkout
                    </button>
                </div>

                <div className="mt-6 flex-1">
                    <p className="mb-2 text-xs sm:text-sm md:text-base">If you have a promocode, enter it here.</p>
                    <div className="flex items-center bg-gray-200 rounded-md p-2">
                        <input 
                            type="text" 
                            placeholder="Enter promocode" 
                            className="bg-transparent border-none outline-none flex-grow px-2 py-1 text-xs sm:text-sm md:text-base"
                        />
                        <button 
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-xs sm:text-sm md:text-base"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;