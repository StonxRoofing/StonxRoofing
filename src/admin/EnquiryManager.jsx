import React from 'react';
import { useEnquiries } from './EnquiryContext';

const EnquiryManager = () => {
  const { enquiries } = useEnquiries();

  return (
    <div style={{ padding: 30, color: 'white' }}>
      <h2>Enquiries</h2>
      {enquiries.length === 0 ? (
        <p>No enquiries available.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
          <thead>
            <tr style={{ backgroundColor: '#333', textAlign: 'left' }}>
              <th style={{ padding: 10, border: '1px solid #555' }}>Timestamp</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Name</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Product</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Contact</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Email</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Message</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} style={{ borderBottom: '1px solid #555' }}>
                <td style={{ padding: 10, border: '1px solid #555' }}>
                  {new Date(enquiry.timestamp).toLocaleString()}
                </td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{enquiry.name}</td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{enquiry.productName || 'N/A'}</td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{enquiry.contactNumber}</td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{enquiry.email}</td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{enquiry.message || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnquiryManager;