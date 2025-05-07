import React, { createContext, useContext, useState, useEffect } from 'react';

const EnquiryContext = createContext();

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState(() => {
    const savedEnquiries = localStorage.getItem('enquiries');
    return savedEnquiries ? JSON.parse(savedEnquiries) : [];
  });

  useEffect(() => {
    localStorage.setItem('enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  const addEnquiry = (enquiry) => {
    const newEnquiry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...enquiry,
    };
    setEnquiries((prevEnquiries) => [...prevEnquiries, newEnquiry]);
  };

  return (
    <EnquiryContext.Provider value={{ enquiries, addEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiries = () => useContext(EnquiryContext);