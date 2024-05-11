import React, { useContext, useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../constants/CartContext';

const ProductCard = (props) => {
    const { product } = props;
    const cart = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    const productQuantity = cart.getProductQuantity(product.id);

    useEffect(() => {
        setIsAdded(productQuantity > 0);
    }, [productQuantity]);

    const handleAddToCart = () => {
        cart.addOneToCart(product.id);
        setIsAdded(true);
    };

    const handleAddToOrder = () => {
        cart.addOneToCart(product.id);
        cart.proceedToCheckout(); // Update cart context to proceed to checkout
    };

    return (
        <div className="border rounded shadow p-4 m-6 text-white">
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-neutral-400">${product.price}</p>
            {isAdded ? (
                <div className="mt-4">
                    <div className="flex items-center">
                        <label className="mr-2">{productQuantity}</label>
                        <div className="flex">
                            <button className="px-2 py-1 bg-blue-500 text-white rounded-full mr-2" onClick={() => cart.addOneToCart(product.id)}>+</button>
                            <button className="px-2 py-1 bg-blue-500 text-white rounded-full" onClick={() => cart.removeOneFromCart(product.id)}>-</button>
                        </div>
                    </div>
                    <button className="mt-4 px-4 py-2 ml-6 bg-green-500 text-white rounded" onClick={handleAddToOrder}>Add to Order</button>
                </div>
            ) : (
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddToCart}>Add to Cart</button>
            )}
        </div>
    );
};

export default ProductCard;