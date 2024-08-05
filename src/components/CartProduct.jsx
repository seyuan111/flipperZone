import React, { useContext } from 'react';
import { CartContext } from '../constants/CartContext';

const CartProduct = (props) => {
    const { id, quantity, getProductData } = props;
    const cart = useContext(CartContext);
    const productData = getProductData(id);

    console.log(`Rendering CartProduct for id ${id}:`, productData);

    if (!productData) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <h3>{productData.name}</h3>
            <p>{quantity} total</p>
            <p>$ {(quantity * productData.price).toFixed(2)}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => cart.removeFromCart(id)}>Remove item</button>
            <hr />
        </div>
    );
};

export default CartProduct;