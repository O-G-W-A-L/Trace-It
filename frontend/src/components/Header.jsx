// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleLogout = () => {
    // Use the passed onLogout function if available or handle navigation/logout logic
    if (onLogout) {
      onLogout();
    } else {
      doSignOut().then(() => {
        navigate('/login');
      });
    }
  };

  return (
    <header className="p-4 bg-indigo-600 text-white flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <div>
        {userLoggedIn ? (
          <button onClick={handleLogout} className="p-2 bg-red-500 rounded text-sm">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="mr-4 text-sm text-blue-300 underline">
              Login
            </Link>
            <Link to="/register" className="text-sm text-blue-300 underline">
              Register New Account
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
