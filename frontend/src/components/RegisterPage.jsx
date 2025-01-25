import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import GoogleSignInButton from './GoogleSignInButton';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');
  const [isAdminRegister, setIsAdminRegister] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showPasswords, setShowPasswords] = useState({ password: false, confirmPassword: false });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleLogoClick = () => setLogoClicks((prev) => (prev === 4 ? (setIsAdminRegister(true), 0) : prev + 1));
  const togglePasswordVisibility = (field) => setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }
    try {
      // Attempt to create a new user
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Update the user's display name and send an email verification
      await updateProfile(user, { displayName: `${formData.firstName} ${formData.lastName}` });
      await sendEmailVerification(user);

      // Save user data to Firestore
      await saveUserData(user.uid, {
        ...formData,
        role: isAdminRegister ? 'admin' : 'user',
        fullName: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phoneNumber,
        emailVerified: false,
        createdAt: new Date(),
      });

      alert('Registration successful! Please verify your email before logging in.');
      navigate('/login');
    } catch (error) {
      // Handle specific Firebase errors for better feedback
      if (error.code === 'auth/invalid-email') {
        setError('The email address is invalid. Please provide a valid email.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please use a different email.');
      } else {
        setError(error.message || 'An error occurred during registration.');
      }
    }
  };

  const saveUserData = async (uid, userData) => {
    const db = getFirestore();
    await setDoc(doc(db, 'users', uid), userData);
  };

  const renderInput = (id, type, placeholder, icon) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 capitalize">
        {id.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      <div className="mt-1 relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </span>
        <input
          id={id}
          type={type === 'password' ? (showPasswords[id] ? 'text' : 'password') : type}
          required
          value={formData[id]}
          onChange={handleChange}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => togglePasswordVisibility(id)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPasswords[id] ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 relative overflow-hidden">
        <div className="flex flex-col items-center" onClick={handleLogoClick}>
          <MapPin className="h-16 w-16 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isAdminRegister ? 'Admin Registration' : 'Create Your Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">Join our community today</p>
        </div>

        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {renderInput('firstName', 'text', 'Hunter', <User className="h-5 w-5 text-gray-400" />)}
              {renderInput('lastName', 'text', 'Hunt', <User className="h-5 w-5 text-gray-400" />)}
            </div>
            {renderInput('email', 'email', 'you@example.com', <Mail className="h-5 w-5 text-gray-400" />)}
            {renderInput('phoneNumber', 'tel', '+256 (000) 000-000', <Phone className="h-5 w-5 text-gray-400" />)}
            {renderInput('password', 'password', '••••••••', <Lock className="h-5 w-5 text-gray-400" />)}
            {renderInput('confirmPassword', 'password', '••••••••', <Lock className="h-5 w-5 text-gray-400" />)}
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="ml-3 text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isAdminRegister ? 'Register as Admin' : 'Sign up'}
          </button>
        </form>

        {!isAdminRegister && <GoogleSignInButton />}

        <div className="text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
