import React, { createContext, useContext, useState, useEffect } from 'react';

const LogContext = createContext();

export const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState(() => {
    const savedLogs = localStorage.getItem('logs');
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs));
  }, [logs]);

  const addLog = (action, details) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      action,
      details,
    };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogs = () => useContext(LogContext);