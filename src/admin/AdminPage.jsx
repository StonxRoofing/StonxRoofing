import React, { useState } from 'react';
import Login from './Login';
import Sidebar from './Sidebar';
import ProductManager from './ProductManager';
import LogManager from './LogManager';
import EnquiryManager from './EnquiryManager';
import './Admin.css';
import { useProducts } from '../pages/ProductContext';

const AdminPage = () => {
  const { products, setProducts } = useProducts();
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState('products');

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="admin-dashboard">
      <Sidebar username={user} onSelect={setMenu} />
      <div className="main-content">
        <h1 className="admin-header">Admin Dashboard</h1>
        {menu === 'products' && (
          <ProductManager products={products} setProducts={setProducts} />
        )}
        {menu === 'logs' && <LogManager />}
        {menu === 'enquiries' && <EnquiryManager />}
        {menu === 'settings' && (
          <div style={{ padding: 30, color: 'white' }}>
            <h2>Settings</h2>
            <p>Settings page coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;