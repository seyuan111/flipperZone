import React, {useContext} from 'react';
import {CartContext} from '../constants/CartContext';
import { getProductData } from '../constants/storeItems';

const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)
  return (
    <div>
        <h3>{productData.name}</h3>
        <p>{quantity} total</p>
        <p>$ { (quantity * productData.price).toFixed(2)}</p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => cart.deleteFromCart(id)}>Remove item</button>
        <hr></hr>
    </div>
  )
}

export default CartProduct