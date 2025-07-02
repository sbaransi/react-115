import { createContext, useState } from "react";
const IgnoreMe = { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' };
export type Product = typeof IgnoreMe
// @ts-ignore
export const CartContext =

    createContext<{ cart: Array<Product>, addToCart: Function }>({ cart: [], addToCart: () => { } })

export function CartProvider(props: { children: any }) {
    const [cart, setCart] = useState<Array<Product>>([])

    const addToCart = (newCartItem: Product) => {
        setCart([...cart, newCartItem])
    }

    return <CartContext.Provider value={{ cart, addToCart }}>
        {props.children}
    </CartContext.Provider>


}

