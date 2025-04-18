import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleSignInButton from './GoogleSignInButton';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleLogoClick = () => setLogoClicks((prev) => (prev === 4 ? (setIsAdminLogin(true), 0) : prev + 1));
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Determine the fetch URL based on the environment (local vs deployed)
  const backendUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/login'  // For local testing
    : 'https://backend-cyan-six-87.vercel.app/api/login';  // For production

  const backendUrlGoogle = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/google-login'  // For local testing (Google login)
    : 'https://backend-cyan-six-87.vercel.app/api/google-login';  // For production (Google login)

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { user } = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const idToken = await user.getIdToken();
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
      });
      if (!response.ok) throw new Error((await response.json()).error || 'Login failed');
      const { role } = await response.json();
      navigate(role === 'admin' ? '/admin' : '/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 relative overflow-hidden">
        <div className="flex flex-col items-center" onClick={handleLogoClick}>
          <MapPin className="h-16 w-16 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{isAdminLogin ? 'Admin Login' : 'Welcome Back'}</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            {['email', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {field === 'email' ? <Mail className="h-5 w-5 text-gray-400" /> : <Lock className="h-5 w-5 text-gray-400" />}
                  </div>
                  <input
                    id={field}
                    type={field === 'password' ? (showPassword ? "text" : "password") : field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={field === 'email' ? "you@example.com" : "••••••••"}
                  />
                  {field === 'password' && (
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500 transition-colors" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500 transition-colors" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <h3 className="ml-3 text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          )}
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            {isAdminLogin ? 'Sign in as Admin' : 'Sign in'}
          </button>
        </form>
        <div className="relative text-sm text-gray-500 my-4">
          <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-4">Or continue with</span>
          <div className="border-t border-gray-300" />
        </div>
        <GoogleSignInButton backendUrlGoogle={backendUrlGoogle} />
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import GoogleSignInButton from './GoogleSignInButton'; // Import the reusable component

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phoneNumber: ''
  });
  const [error, setError] = useState('');
  const [isAdminRegister, setIsAdminRegister] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showPasswords, setShowPasswords] = useState({ password: false, confirmPassword: false });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
  const handleLogoClick = () => setLogoClicks(prev => prev === 4 ? (setIsAdminRegister(true), 0) : prev + 1);
  const togglePasswordVisibility = (field) => setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(user, { displayName: `${formData.firstName} ${formData.lastName}` });
      await saveUserData(user.uid, {
        ...formData,
        role: isAdminRegister ? 'admin' : 'user',
        fullName: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phoneNumber,
        createdAt: new Date()
      });
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  const saveUserData = async (uid, userData) => {
    const db = getFirestore();
    await setDoc(doc(db, 'users', uid), userData);
  };

  const renderInput = (id, type, placeholder, icon) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 capitalize">{id.replace(/([A-Z])/g, ' $1').trim()}</label>
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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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

        <GoogleSignInButton /> {/* Reusable Google sign-in button */}
        
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
