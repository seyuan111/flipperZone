import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const CheckoutPage = () => {
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const purchasedItems = [
    { id: 1, name: 'Product 1', price: 25.99 },
    { id: 2, name: 'Product 2', price: 15.49 },
    { id: 3, name: 'Product 3', price: 9.99 },
  ];

  const totalAmount = purchasedItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleExpiryDateChange = (e) => {
    // Ensure the value matches the MM/YY format
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4); // Remove non-numeric characters and limit to 4 digits
    const formattedValue = value.length >= 3 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;
    setExpiryDate(formattedValue);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar placed outside the checkout form */}
      <NavBar />
      
      {/* Checkout Form */}
      <div className="flex-grow flex justify-center items-center bg-white shadow-md rounded-lg p-4 m-8 mx-4 max-w-lg">
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-black">Checkout</h2>

          {/* Purchased Items */}
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2 text-black">Purchased Items</h3>
            <ul>
              {purchasedItems.map(item => (
                <li key={item.id} className="flex justify-between border-b py-2 text-black">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="font-semibold text-right mt-2 text-black">Total: ${totalAmount}</div>
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

