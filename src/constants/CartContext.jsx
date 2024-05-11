import React, {createContext, useState} from 'react'
import {productsArray, getProductData} from '../constants/storeItems'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}){
    const [cartProduct, setCartProduct] = useState([])
    const [proceedToCheckout, setProceedToCheckout] = useState(false); 

    function getProductQuantity(id){
        const quantity = cartProduct.find(product => product.id === id)?.quantity

        if(quantity === undefined){
            return 0
        }
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        if(quantity === 0){
            setCartProduct(
                [
                    ...cartProduct,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else{
            setCartProduct(
                cartProduct.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product)
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)

        if(quantity == 1){
            deleteFromCart(id)
        }else{
            setCartProduct(
                cartProduct.map(product => product.id === id ? {...product, quantity: product.quantity - 1} : product)
            )
        }
    }

    function deleteFromCart(id){
        setCartProduct(cartProducts => cartProducts.filter(currentProduct => {
            return currentProduct.id != id;
        }))
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProduct.map((cartItems) => {
            const productData = getProductData(cartItems.id)
            totalCost += (productData.price * cartItems.quantity)
        })
        return totalCost
    }

    const contextValue = {
        items: cartProduct,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        proceedToCheckout: () => setProceedToCheckout(true), // Update state for proceeding to checkout
    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider