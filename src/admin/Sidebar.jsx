import React from 'react';
import './Admin.css';

const Sidebar = ({ username, onSelect }) => {
  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-heading">Welcome, {username}</h3>
      <hr />
      <div className="sidebar-menu-item" onClick={() => onSelect('products')}>
        🛠 Products
      </div>
      <div className="sidebar-menu-item" onClick={() => onSelect('logs')}>
        📜 Log
      </div>
      <div className="sidebar-menu-item" onClick={() => onSelect('enquiries')}>
        📩 Enquiries
      </div>
      <div className="sidebar-menu-item" onClick={() => onSelect('settings')}>
        ⚙️ Settings
      </div>
    </div>
  );
};

export default Sidebar;