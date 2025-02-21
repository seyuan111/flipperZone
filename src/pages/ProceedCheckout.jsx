import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../constants/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const CheckoutPage = () => {
    const { cartItems, productsArray, getTotalCartAmount } = useContext(CartContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const purchasedItems = productsArray.filter((item) => cartItems[item._id] > 0);
    const deliveryFee = location.state?.deliveryFee || 0; // Default to 0 if not provided
    const subtotal = getTotalCartAmount();
    const total = subtotal + deliveryFee;

    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    useEffect(() => {
        if (!purchasedItems.length) {
            navigate('/');
        }
    }, [purchasedItems, navigate]);

    // Format expiry date input
    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
        const formattedValue = value.length >= 3 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
        setExpiryDate(formattedValue);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-grow flex justify-center items-center bg-white shadow-md rounded-lg p-4 m-8 mx-4 max-w-lg">
                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-4 text-black">Checkout</h2>

                    {/* Purchased Items */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2 text-black">Purchased Items</h3>
                        {purchasedItems.length > 0 ? (
                            <ul>
                                {purchasedItems.map(item => (
                                    <li key={item._id} className="flex justify-between border-b py-2 text-black">
                                        <span>{item.name} (x{cartItems[item._id]})</span>
                                        <span>${(item.price * cartItems[item._id]).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No items in your cart.</p>
                        )}
                        <hr className="my-2 border-gray-300" />
                        <div className="flex justify-between mt-2 text-black">
                            <p>Subtotal:</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-black">
                            <p>Delivery Fee:</p>
                            <p>${deliveryFee.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between font-semibold text-black">
                            <p>Total:</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Address Input */}
                    <div className="mb-4">
                        <label className="block font-medium mb-1 text-black">Shipping Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border-2 text-black rounded-md bg-white"
                            placeholder="Enter your address"
                        />
                    </div>

                    {/* Credit Card Input */}
                    <div className="mb-4">
                        <label className="block font-medium mb-1 text-black">Credit Card Information</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full p-2 border-2 bg-white text-black rounded-md mb-2"
                            placeholder="Card Number"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                className="w-1/2 p-2 border-2 rounded-md bg-white text-black"
                                placeholder="MM/YY"
                            />
                            <input
                                type="text"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="w-1/2 p-2 border-2 rounded-md bg-white text-black"
                                placeholder="CVV"
                            />
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-blue-500 text-white p-2 rounded-md font-medium hover:bg-blue-600">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
