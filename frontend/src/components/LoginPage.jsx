import React, { useEffect, useReducer, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import GoogleSignInButton from './GoogleSignInButton';
import { useAuth } from '../contexts/AuthContext';

const initialState = {
  formData: { email: '', password: '' },
  error: '',
  message: '',
  isAdminLogin: false,
  logoClicks: 0,
  showPassword: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, formData: { ...state.formData, [action.field]: action.value } };
    case 'SET_ERROR':
      return { ...state, error: action.value };
    case 'SET_MESSAGE':
      return { ...state, message: action.value };
    case 'TOGGLE_ADMIN_LOGIN':
      return { ...state, isAdminLogin: !state.isAdminLogin };
    case 'INCREMENT_LOGO_CLICKS':
      return { ...state, logoClicks: state.logoClicks + 1 };
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, showPassword: !state.showPassword };
    default:
      return state;
  }
};

const LoginPage = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { user, userRole } = useAuth();
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false); // ✅ added

  const { formData, error, message, isAdminLogin, showPassword } = state;

  useEffect(() => {
    if (user?.emailVerified && userRole && !hasNavigatedRef.current) {
      hasNavigatedRef.current = true;
      navigate(userRole === 'admin' ? '/admin' : '/dashboard', { replace: true });
    }
  }, [user?.emailVerified, userRole, navigate]);

  const handleChange = (e) => dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value });

  const handleLogoClick = () => {
    dispatch({ type: 'INCREMENT_LOGO_CLICKS' });
    if (state.logoClicks + 1 === 5) {
      dispatch({ type: 'TOGGLE_ADMIN_LOGIN' });
    }
  };

  const togglePasswordVisibility = () => dispatch({ type: 'TOGGLE_PASSWORD_VISIBILITY' });

  const backendUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api/login'
      : 'https://backend-cyan-six-87.vercel.app/api/login';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch({ type: 'SET_ERROR', value: '' });
    dispatch({ type: 'SET_MESSAGE', value: '' });

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
    } catch (error) {
      dispatch({ type: 'SET_ERROR', value: error.message || 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!formData.email) {
      dispatch({ type: 'SET_ERROR', value: 'Please enter your email address to reset the password.' });
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      dispatch({ type: 'SET_MESSAGE', value: 'Password reset email sent! Check your inbox.' });
      dispatch({ type: 'SET_ERROR', value: '' });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', value: error.message || 'Failed to send password reset email.' });
      dispatch({ type: 'SET_MESSAGE', value: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 relative overflow-hidden">
        <div className="flex flex-col items-center" onClick={handleLogoClick}>
          <MapPin className="h-16 w-16 text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isAdminLogin ? 'Admin Login' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            {['email', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {field === 'email' ? <Mail className="h-5 w-5 text-gray-400" /> : <Lock className="h-5 w-5 text-gray-400" />}
                  </div>
                  <input
                    id={field}
                    type={field === 'password' ? (showPassword ? 'text' : 'password') : field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={field === 'email' ? 'you@example.com' : '••••••••'}
                  />
                  {field === 'password' && (
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : isAdminLogin ? 'Sign in as Admin' : 'Sign in'}
          </button>
        </form>

        <button onClick={handlePasswordReset} className="w-full text-sm text-indigo-600 hover:text-indigo-500 mt-2 focus:outline-none">
          Forgot your password?
        </button>

        {!isAdminLogin && <GoogleSignInButton />}

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
