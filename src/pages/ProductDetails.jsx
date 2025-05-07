import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from './ProductContext';
import './ProductDetails.css';


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="not-found">Product not found.</div>;

  return (
    <>

      <main className="details-main">
        <div className="details-container">
          <img src={product.image} alt={product.name} className="details-image" />
          <div className="details-info">
            <h2 className="details-name">{product.name || 'StoneX Stone Name'}</h2>
            <p className="details-description">
              {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>
            <button className="enquire-button">Enquire</button>
          </div>
        </div>
        <div className="specifications-container">
          <h3 className="specifications-title">{product.name || 'Product'} Specifications</h3>
          <table className="specifications-table">
          <tbody>
                <tr>
                  <td>Overall Length</td>
                  <td>1340mm</td>
                </tr>
                <tr>
                  <td>Length of Cover</td>
                  <td>1270mm</td>
                </tr>
                <tr>
                  <td>Width of Cover</td>
                  <td>378mm</td>
                </tr>
                <tr>
                  <td>Roof Cover / Tile</td>
                  <td>.48m²/Pc</td>
                </tr>
                <tr>
                  <td>Tiles / M²</td>
                  <td>2.08 Pc</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>2.5-3.5 kg</td>
                </tr>
                <tr>
                  <td>Nailing Points Per Tile</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Minimum Roof Pitch</td>
                  <td>15 Deg</td>
                </tr>
              </tbody>
          </table>
          <div className="additional-image-container">
            <img
              src={product.additionalImage || 'https://via.placeholder.com/300x200?text=Additional+Image'}
              alt={`${product.name} Additional View`}
              className="additional-image"
            />
            <p className="additional-image-caption">Additional View or Installation Example</p>
          </div>
        </div>
      </main>

    </>
  );
};

export default ProductDetails;
