import React, { useEffect, useState } from 'react';
import { useProducts } from '../pages/ProductContext';
import { useLogs } from '../admin/LogContext';

const ProductManager = () => {
  const { products, setProducts } = useProducts();
  const [editedProducts, setEditedProducts] = useState([]);
  const { addLog } = useLogs();

  useEffect(() => {
    setEditedProducts([...products]);
  }, [products]);
  const handleChange = (index, field, value) => {
    setEditedProducts((prev) => {
      const newProducts = [...prev];
      newProducts[index] = { ...newProducts[index], [field]: value };
      return newProducts;
    });
  };

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      name: '',
      image: '',
      description: '',
      overallLength: '1340mm',
      lengthOfCover: '1270mm',
      widthOfCover: '378mm',
      roofCoverPerTile: '.48m²/Pc',
      tilesPerSquareMeter: '2.08 Pc',
      weight: '2.5-3.5 kg',
      nailingPointsPerTile: '3',
      minimumRoofPitch: '15 Deg',
    };
    setEditedProducts((prev) => [...prev, newProduct]);
    addLog('Add Product', `Added a new product with ID: ${newProduct.id}`);
  };
  const handleRemove = (index) => {
    const removedProduct = editedProducts[index];
    setEditedProducts((prev) => {
      const newProducts = [...prev];
      newProducts.splice(index, 1);
      return newProducts;
    });
    addLog('Remove Product', `Removed product with ID: ${removedProduct.id}, Name: ${removedProduct.name || 'Unnamed'}`);
  };

  const handleSave = () => {
    setProducts([...editedProducts]);
    addLog('Save Products', `Saved ${editedProducts.length} products`);
    alert('Products updated!');
  };
    return (
      <div style={{ padding: 30, color: 'white' }}>
        <h2>Product Editor</h2>
        {editedProducts.map((prod, i) => (
          <div key={prod.id} style={{ marginBottom: 20, border: '1px solid #444', padding: 15, borderRadius: 5 }}>
            <div style={{ marginBottom: 10 }}>
              <input
                type="text"
                value={prod.name}
                onChange={(e) => handleChange(i, 'name', e.target.value)}
                placeholder="Name"
                style={{ marginRight: 10, width: 200 }}
              />
              <input
                type="text"
                value={prod.image}
                onChange={(e) => handleChange(i, 'image', e.target.value)}
                placeholder="Image URL"
                style={{ marginRight: 10, width: 200 }}
              />
              <input
                type="text"
                value={prod.additionalImage}
                onChange={(e) => handleChange(i, 'additionalImage', e.target.value)}
                placeholder="Additional Image URL"
                style={{ marginRight: 10, width: 200 }}
              />
              <input
                type="text"
                value={prod.description}
                onChange={(e) => handleChange(i, 'description', e.target.value)}
                placeholder="Description"
                style={{ marginRight: 10, width: 300 }}
              />
              <button onClick={() => handleRemove(i)}>Remove</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Overall Length</label>
              <input
                type="text"
                value={prod.overallLength}
                onChange={(e) => handleChange(i, 'overallLength', e.target.value)}
                placeholder="Overall Length"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Length of Cover</label>
              <input
                type="text"
                value={prod.lengthOfCover}
                onChange={(e) => handleChange(i, 'lengthOfCover', e.target.value)}
                placeholder="Length of Cover"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Width of Cover</label>
              <input
                type="text"
                value={prod.widthOfCover}
                onChange={(e) => handleChange(i, 'widthOfCover', e.target.value)}
                placeholder="Width of Cover"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Roof Cover / Tile</label>
              <input
                type="text"
                value={prod.roofCoverPerTile}
                onChange={(e) => handleChange(i, 'roofCoverPerTile', e.target.value)}
                placeholder="Roof Cover / Tile"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Tiles / M²</label>
              <input
                type="text"
                value={prod.tilesPerSquareMeter}
                onChange={(e) => handleChange(i, 'tilesPerSquareMeter', e.target.value)}
                placeholder="Tiles / M²"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Weight</label>
              <input
                type="text"
                value={prod.weight}
                onChange={(e) => handleChange(i, 'weight', e.target.value)}
                placeholder="Weight"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Nailing Points Per Tile</label>
              <input
                type="text"
                value={prod.nailingPointsPerTile}
                onChange={(e) => handleChange(i, 'nailingPointsPerTile', e.target.value)}
                placeholder="Nailing Points Per Tile"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Minimum Roof Pitch</label>
              <input
                type="text"
                value={prod.minimumRoofPitch}
                onChange={(e) => handleChange(i, 'minimumRoofPitch', e.target.value)}
                placeholder="Minimum Roof Pitch"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          </div>
        ))}
        <button onClick={handleAdd}>Add New Product</button>
        <br /><br />
        <button onClick={handleSave}>Save All</button>
      </div>
    );
};

export default ProductManager;
