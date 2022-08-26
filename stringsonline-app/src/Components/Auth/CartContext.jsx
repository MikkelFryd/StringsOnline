import { createContext, useEffect, useState } from "react";


const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
        console.log(cartItems)
	}, []);

	return (
		<CartContext.Provider value={{cartItems, setCartItems}}>
			{children}
		</CartContext.Provider>
	)
}


export { CartContext, CartProvider}