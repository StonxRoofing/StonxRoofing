import React from 'react';
import { useProducts } from './ProductContext';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';


const ProductsPage = () => {
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <>
      <main className="products-main">
        <h1 className="products-title">Our Products</h1>
        <p className="products-description">
          Upgrade your roof with the unmatched durability and elegance of StoneX Premium Stone-Coated Roofing Panels.
          Engineered for extreme weather resistance, our panels combine the strength of steel with a natural stone finish for long-lasting protection and timeless curb appeal.
          Easy to install and virtually maintenance-free, StoneX is the ultimate roofing solution for beauty that lasts a lifetime from the elements.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name || 'Product Name'}</h3>
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="view-button"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

    </>
  );
};

export default ProductsPage;