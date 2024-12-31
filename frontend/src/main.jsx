import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Error boundary for production
if (process.env.NODE_ENV === 'production') {
  try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Application failed to mount:', error);
  }
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}