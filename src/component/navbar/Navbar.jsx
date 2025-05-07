import React, { useState } from 'react';
import './Navbar.css';
import serverLogo from '../../assets/stonex-logo.png';
import { Link } from 'react-router-dom';
import { useProducts } from '../../pages/ProductContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const { products } = useProducts();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get the first 4 products for the preview
  const previewProducts = products.slice(0, 4);

  return (
    <div className="navbar">
      <div className="left-sec">
        <Link to="/">
          <img src={serverLogo} alt="StoneX Logo" className="serverlogo" />
        </Link>
      </div>
      <div className="right-sec">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li
            className="products-link"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            {isProductsHovered && previewProducts.length > 0 && (
              <div className="products-preview">
                {previewProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="preview-item"
                    onClick={() => setIsProductsHovered(false)}
                  >
                    <img
                      src={product.image || 'https://via.placeholder.com/50?text=No+Image'}
                      alt={product.name}
                      className="preview-image"
                    />
                    <span className="preview-name">{product.name || 'Unnamed Product'}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
