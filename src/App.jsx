import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProductProvider } from './pages/ProductContext';
import { LogProvider } from './admin/LogContext';
import { EnquiryProvider } from './admin/EnquiryContext';

import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Hero from './component/home/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import AdminPage from './admin/AdminPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-wrapper">
      {!isAdminRoute && <Navbar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ProductProvider>
      <LogProvider>
        <EnquiryProvider>
          <Router>
            <Layout />
          </Router>
        </EnquiryProvider>
      </LogProvider>
    </ProductProvider>
  );
}

export default App;
