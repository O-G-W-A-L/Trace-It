import React, { useEffect, useReducer, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
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
  const hasNavigatedRef = useRef(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 flex items-center justify-center py-8 px-4 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8" onClick={handleLogoClick}>
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-teal-600 to-cyan-600 p-4 rounded-2xl">
              <MapPin className="h-12 w-12 text-white" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
            {isAdminLogin ? 'Admin Portal' : 'Welcome Back'}
          </h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="••••••••"
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-slate-100 rounded-r-xl transition-colors"
              >
                {showPassword ? 
                  <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" /> : 
                  <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                }
              </button>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
          {message && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <p className="text-sm text-emerald-700">{message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {isLoading && (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
            </span>
            {isLoading ? 'Signing in...' : isAdminLogin ? 'Access Admin Portal' : 'Sign In'}
          </button>
        </form>

        {/* Forgot Password */}
        <button 
          onClick={handlePasswordReset} 
          className="w-full mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
        >
          Forgot your password?
        </button>

        {/* Google Sign In */}
        {!isAdminLogin && (
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-4">
              <GoogleSignInButton />
            </div>
          </div>
        )}

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-teal-600 hover:text-teal-700 transition-colors">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
