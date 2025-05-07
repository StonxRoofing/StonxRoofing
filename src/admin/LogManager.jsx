import React from 'react';
import { useLogs } from './LogContext';

const LogManager = () => {
  const { logs } = useLogs();

  return (
    <div style={{ padding: 30, color: 'white' }}>
      <h2>Activity Log</h2>
      {logs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
          <thead>
            <tr style={{ backgroundColor: '#333', textAlign: 'left' }}>
              <th style={{ padding: 10, border: '1px solid #555' }}>Timestamp</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Action</th>
              <th style={{ padding: 10, border: '1px solid #555' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} style={{ borderBottom: '1px solid #555' }}>
                <td style={{ padding: 10, border: '1px solid #555' }}>
                  {new Date(log.timestamp).toLocaleString()}
                </td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{log.action}</td>
                <td style={{ padding: 10, border: '1px solid #555' }}>{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LogManager;