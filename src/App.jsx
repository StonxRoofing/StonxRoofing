import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
          <Helmet>
              <title>StoneX Roofing | Premium Roofing Solutions</title>
              <meta name="description" content="Discover StoneX Roofing for durable, stylish roofing solutions. Search for stonxroofing or roofing to find us!" />
              <meta name="keywords" content="StoneX Roofing, stonxroofing, roofing, roofing solutions, residential roofing" />
            </Helmet>
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
