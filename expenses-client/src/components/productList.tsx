// ProductList.tsx
import React from 'react';
import './productList.css';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

const products: Product[] = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$15.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$25.00', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$30.00', image: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC = () => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
