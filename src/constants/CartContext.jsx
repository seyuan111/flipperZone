import React, { createContext, useState, useEffect } from 'react';
import { productsArray } from '../constants/storeItems';

export const CartContext = createContext(null);

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, initialAdd) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (initialAdd) {
                if (!updatedCart[itemId]) {
                    updatedCart[itemId] = 1;
                }
            } else {
                if (updatedCart[itemId]) {
                    updatedCart[itemId] += 1;
                }
            }
            return updatedCart;
        });
    };

    const decrement = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = productsArray.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return parseFloat(totalAmount.toFixed(2));
    };

    const contextValue = {
        productsArray,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        decrement
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;