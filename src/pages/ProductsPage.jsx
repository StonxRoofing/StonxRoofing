import React from 'react';
import { useProducts } from './ProductContext';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  const { products } = useProducts();

  return (
    <div className="products-main">
       <h1 className="products-title">Our Products</h1>
        <p className="products-description">
          Upgrade your roof with the unmatched durability and elegance of StoneX Premium Stone-Coated Roofing Panels.
          Engineered for extreme weather resistance, our panels combine the strength of steel with a natural stone finish for long-lasting protection and timeless curb appeal.
          Easy to install and virtually maintenance-free, StoneX is the ultimate roofing solution for beauty that lasts a lifetime from the elements.
        </p>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="product-image" />
              <h2>{product.name || 'Unnamed Product'}</h2>
              <Link to={`/products/${product.id}`} className="product-link"><button  className='view-button '>View Details</button></Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;