import {createContext, useState} from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems;
            }
            return prevItems.concat(product);
        });
    }

    function removeFromCart(productId) {
        return setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }

    function CartCount(){
        return cartItems.length;
    }

    function cartTotalPrice() {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, CartCount, cartTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext} ;