import React, { useState } from 'react';
import { useProducts } from '../pages/ProductContext';
import { useEnquiries } from '../admin/EnquiryContext';
import './ContactPage.css';


const ContactPage = () => {
  const { products } = useProducts();
  const { addEnquiry } = useEnquiries();
  const [formData, setFormData] = useState({
    name: '',
    productName: '',
    contactNumber: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.contactNumber || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    // Add enquiry to context
    addEnquiry(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      productName: '',
      contactNumber: '',
      email: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <>
      <main className="contact-main">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us!</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <select
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>
                  Select a Product
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name || 'Unnamed Product'}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number *"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (Optional)"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="form-submit">
              {submitted ? 'Submitted!' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="build-section">
          <h2 className="build-title">Let's Build</h2>
          <p className="build-description">
            Upgrade your roof with StoneX Premium Stone-Coated Roofing Panels. Engineered for durability and elegance,
            our panels offer long-lasting protection and timeless appeal. Let's collaborate to create the perfect roofing solution for you.
          </p>
        </div>
      </main>
    </>
  );
};

export default ContactPage;