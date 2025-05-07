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
            <thead>
              <tr>
                <th></th>
                <th>Stonex</th>
                <th>Stonex Plus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>{product.a || '1,322mm'}</td>
                <td>{product.aPlus || '1,322mm'}</td>
              </tr>
              <tr>
                <td>b</td>
                <td>{product.b || '1,253mm'}</td>
                <td>{product.bPlus || '1,253mm'}</td>
              </tr>
              <tr>
                <td>c</td>
                <td>{product.c || '370mm'}</td>
                <td>{product.cPlus || '400mm'}</td>
              </tr>
              <tr>
                <td>d</td>
                <td>{product.d || '25mm'}</td>
                <td>{product.dPlus || '25mm'}</td>
              </tr>
              <tr>
                <td>Panel Size</td>
                <td>{product.panelSize || '425mm x 1,322mm (16-3/4" x 52")'}</td>
                <td>{product.panelSizePlus || '450mm x 1,322mm (17-3/4" x 52")'}</td>
              </tr>
              <tr>
                <td>Installed Exposure</td>
                <td>{product.installedExposure || '370mm x 1,253mm (14-1/2" x 49-1/4")'}</td>
                <td>{product.installedExposurePlus || '400mm x 1,253mm (15-3/4" x 49-1/4")'}</td>
              </tr>
              <tr>
                <td>Panel per Square Meter</td>
                <td>{product.tilesPerSquareMeter || '2.1 tiles/m²'}</td>
                <td>{product.tilesPerSquareMeterPlus || '1.96 tiles/m²'}</td>
              </tr>
              <tr>
                <td>Installed Weight</td>
                <td>{product.installedWeight || '5.96 kg/m² (122.6 lbs/sq)'}</td>
                <td>{product.installedWeightPlus || '—'}</td>
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