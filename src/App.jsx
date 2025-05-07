import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProductProvider } from './pages/ProductContext';
import { LogProvider } from './pages/LogContext';
import { EnquiryProvider } from './pages/EnquiryContext';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import AdminPage from './admin/AdminPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import AboutUs from './pages/AboutUs';

function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ProductProvider>
      <LogProvider>
        <EnquiryProvider>
          <Router>
            <Helmet>
              <title>StoneX Roofing | Premium Roofing Solutions</title>
              <meta name="description" content="Discover StoneX Roofing for durable, stylish roofing solutions. Search for stonxroofing or roofing to find us!" />
              <meta name="keywords" content="StoneX Roofing, stonxroofing, roofing, roofing solutions, residential roofing" />
            </Helmet>
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
              <Route path="/products/:id" element={<Layout><ProductDetails /></Layout>} />
              <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
              <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
            </Routes>
          </Router>
        </EnquiryProvider>
      </LogProvider>
    </ProductProvider>
  );
}

export default App;
