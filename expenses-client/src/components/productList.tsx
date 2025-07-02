// ProductList.tsx
import React, { useContext } from 'react';
import './productList.css';
import { CartContext, type Product } from '../context/cartContext';
import { ProductCard } from './productCard';


const products: Product[] = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$15.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$25.00', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$30.00', image: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC = () => {
    const context = useContext(CartContext)

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} sendP={context.addToCart} />
            ))}
        </div>
    );
};



export default ProductList;
