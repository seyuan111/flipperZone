import React, { useContext } from 'react';
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { FaPlus } from 'react-icons/fa';
import { CartContext } from '../constants/CartContext';

const ProductCard = ({ product }) => {
    const { cartItems, addToCart, decrement } = useContext(CartContext);
    const { _id, name, price } = product;

    return (
        <div className="border rounded-lg shadow-lg p-6 m-4 bg-gray-800 text-white">
            {cartItems[_id] > 0 ? (
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <IoIosRemove 
                            className="minus text-2xl cursor-pointer text-red-500" 
                            onClick={() => decrement(_id)} 
                            />
                            <p className="count text-xl">{cartItems[_id]}</p>
                            <IoIosAdd 
                                className="plus text-2xl cursor-pointer text-green-500" 
                                onClick={() => addToCart(_id, false)} 
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <FaPlus 
                    className="add text-2xl cursor-pointer text-blue-500" 
                    onClick={() => addToCart(_id, true)} 
                />
            )}
            <div className="mt-4">
                <div className="mb-2">
                    <p className="text-xl font-semibold">{name}</p>
                </div>
                <p className="text-lg font-medium text-gray-300">${price.toFixed(2)}</p>
                <button 
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" 
                    onClick={() => addToCart(_id, true)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;