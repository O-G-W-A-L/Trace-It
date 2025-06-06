import React, { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { googleProvider } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    setError('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists() && userDoc.data().role === 'admin') {
        await signOut(auth);
        setError('Administrators cannot use Google Sign-in');
        return;
      }

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          fullName: user.displayName || '',
          email: user.email || '',
          phoneNumber: user.phoneNumber || '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          role: 'user',
        });
      }

      // reload user data to ensure we have the latest
      await user.reload();
      
      // Navigate to dashboard immediately
      navigate('/dashboard', { replace: true });
      
    } catch (err) {
      if (err.code !== 'auth/cancelled-popup-request') {
        console.error('Google Sign-In Error:', err);
        setError(err.message || 'Google sign-in failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className={`w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <img 
          src="https://www.svgrepo.com/show/475656/google-color.svg" 
          alt="Google" 
          className="h-5 w-5 mr-2" 
        />
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
};

export default GoogleSignInButton;