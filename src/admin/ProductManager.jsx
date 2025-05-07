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
      a: '1,322mm',
      aPlus: '1,322mm',
      b: '1,253mm',
      bPlus: '1,253mm',
      c: '370mm',
      cPlus: '400mm',
      d: '25mm',
      dPlus: '25mm',
      panelSize: '425mm x 1,322mm (16-3/4" x 52")',
      panelSizePlus: '450mm x 1,322mm (17-3/4" x 52")',
      installedExposure: '370mm x 1,253mm (14-1/2" x 49-1/4")',
      installedExposurePlus: '400mm x 1,253mm (15-3/4" x 49-1/4")',
      tilesPerSquareMeter: '2.1 tiles/m²',
      tilesPerSquareMeterPlus: '1.96 tiles/m²',
      installedWeight: '5.96 kg/m² (122.6 lbs/sq)',
      installedWeightPlus: '—',
      additionalImage: '',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>a (Atlas Roman)</label>
              <input
                type="text"
                value={prod.a}
                onChange={(e) => handleChange(i, 'a', e.target.value)}
                placeholder="a (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>a (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.aPlus}
                onChange={(e) => handleChange(i, 'aPlus', e.target.value)}
                placeholder="a (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>b (Atlas Roman)</label>
              <input
                type="text"
                value={prod.b}
                onChange={(e) => handleChange(i, 'b', e.target.value)}
                placeholder="b (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>b (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.bPlus}
                onChange={(e) => handleChange(i, 'bPlus', e.target.value)}
                placeholder="b (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>c (Atlas Roman)</label>
              <input
                type="text"
                value={prod.c}
                onChange={(e) => handleChange(i, 'c', e.target.value)}
                placeholder="c (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>c (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.cPlus}
                onChange={(e) => handleChange(i, 'cPlus', e.target.value)}
                placeholder="c (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>d (Atlas Roman)</label>
              <input
                type="text"
                value={prod.d}
                onChange={(e) => handleChange(i, 'd', e.target.value)}
                placeholder="d (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>d (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.dPlus}
                onChange={(e) => handleChange(i, 'dPlus', e.target.value)}
                placeholder="d (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Panel Size (Atlas Roman)</label>
              <input
                type="text"
                value={prod.panelSize}
                onChange={(e) => handleChange(i, 'panelSize', e.target.value)}
                placeholder="Panel Size (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Panel Size (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.panelSizePlus}
                onChange={(e) => handleChange(i, 'panelSizePlus', e.target.value)}
                placeholder="Panel Size (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Installed Exposure (Atlas Roman)</label>
              <input
                type="text"
                value={prod.installedExposure}
                onChange={(e) => handleChange(i, 'installedExposure', e.target.value)}
                placeholder="Installed Exposure (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Installed Exposure (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.installedExposurePlus}
                onChange={(e) => handleChange(i, 'installedExposurePlus', e.target.value)}
                placeholder="Installed Exposure (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Tiles per Square Meter (Atlas Roman)</label>
              <input
                type="text"
                value={prod.tilesPerSquareMeter}
                onChange={(e) => handleChange(i, 'tilesPerSquareMeter', e.target.value)}
                placeholder="Tiles per Square Meter (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Tiles per Square Meter (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.tilesPerSquareMeterPlus}
                onChange={(e) => handleChange(i, 'tilesPerSquareMeterPlus', e.target.value)}
                placeholder="Tiles per Square Meter (Atlas Roman Plus)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Installed Weight (Atlas Roman)</label>
              <input
                type="text"
                value={prod.installedWeight}
                onChange={(e) => handleChange(i, 'installedWeight', e.target.value)}
                placeholder="Installed Weight (Atlas Roman)"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 5 }}>Installed Weight (Atlas Roman Plus)</label>
              <input
                type="text"
                value={prod.installedWeightPlus}
                onChange={(e) => handleChange(i, 'installedWeightPlus', e.target.value)}
                placeholder="Installed Weight (Atlas Roman Plus)"
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