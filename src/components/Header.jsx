// src/components/Header.jsx
import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="p-4 bg-indigo-600 text-white">
      <h1 className="text-xl">Admin Dashboard</h1>
      <button onClick={onLogout} className="mt-2 p-2 bg-red-500 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;

