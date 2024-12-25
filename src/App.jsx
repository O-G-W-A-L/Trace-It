import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import ItemDetail from './components/user/ItemDetail';
import UserProfile from './components/user/UserProfile';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Fetch message from Flask backend
    fetch('http://127.0.0.1:5000/api/hello')
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))  // Store the message in state
      .catch((error) => console.error('Error fetching data from backend:', error));

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const role = await getUserRole(currentUser.uid);
        setUserRole(role);
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getUserRole = async (uid) => {
    const db = getFirestore();
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data().role;
    }
    return null;
  };

  const handleLogin = (token) => {
    console.log('User logged in with token:', token);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <Router basename="/">
      <div className="min-h-screen bg-gray-100">
        <div className="text-center py-4">
          {/* Display the backend message */}
          {backendMessage && <p className="text-xl font-semibold text-green-600">{backendMessage}</p>}
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              user && userRole === 'user' ? (
                <UserDashboard user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/profile"
            element={user ? <UserProfile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={
              user && userRole === 'admin' ? (
                <AdminDashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/item/:id"
            element={user ? <ItemDetail currentUser={user} /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
