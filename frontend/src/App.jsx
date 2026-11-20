import React, { useEffect, useState } from 'react';

export default function App() {
  const [status, setStatus] = useState('connecting...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Backend reachable via proxy'));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>⚡ Dummy MERN Frontend</h1>
      <p>Backend API Status: <strong>{status}</strong></p>
    </div>
  );
}
