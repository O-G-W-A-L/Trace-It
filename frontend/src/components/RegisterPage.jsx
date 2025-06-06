"use client"

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MapPin, Mail, Lock, User, Phone, Eye, EyeOff, Sparkles } from "lucide-react"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signOut } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import GoogleSignInButton from "./GoogleSignInButton"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  })
  const [error, setError] = useState("")
  const [isAdminRegister, setIsAdminRegister] = useState(false)
  const [logoClicks, setLogoClicks] = useState(0)
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value })

  const handleLogoClick = () => setLogoClicks((prev) => (prev === 4 ? (setIsAdminRegister(true), 0) : prev + 1))

  const togglePasswordVisibility = (field) => setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }))

  const saveUserData = async (uid, userData) => {
    const fs = getFirestore()
    await setDoc(doc(fs, "users", uid), userData)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const trimmedData = {
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters long")
      setIsLoading(false)
      return
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, trimmedData.email, formData.password)

      await updateProfile(user, {
        displayName: `${trimmedData.firstName} ${trimmedData.lastName}`,
      })

      await sendEmailVerification(user)

      const normalizedPhone = trimmedData.phoneNumber.replace(/\s+/g, "") || ""

      await saveUserData(user.uid, {
        ...trimmedData,
        role: isAdminRegister ? "admin" : "user",
        fullName: `${trimmedData.firstName} ${trimmedData.lastName}`,
        phone: normalizedPhone,
        emailVerified: user.emailVerified,
        createdAt: new Date(),
      })

      alert("Registration successful! Please verify your email before logging in.")

      await signOut(auth)
      setTimeout(() => navigate("/login", { replace: true }), 300)
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("The email address is invalid. Please provide a valid email.")
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please use a different email.")
      } else {
        setError(err.message || "An error occurred during registration.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const renderInput = (id, type, placeholder, icon) => (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {id.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {React.cloneElement(icon, {
            className: "h-5 w-5 text-slate-400 group-focus-within:text-teal-600 transition-colors",
          })}
        </div>
        <input
          id={id}
          type={type === "password" ? (showPasswords[id] ? "text" : "password") : type}
          required
          value={formData[id]}
          onChange={handleChange}
          className="block w-full pl-10 pr-12 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => togglePasswordVisibility(id)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-slate-100 rounded-r-xl transition-colors"
          >
            {showPasswords[id] ? (
              <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
            ) : (
              <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
            )}
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 flex items-center justify-center py-8 px-4 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-white/20">
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
            {isAdminRegister ? "Admin Registration" : "Join TraceIt"}
          </h1>
          <p className="mt-2 text-sm text-slate-600">Create your account to get started</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            {renderInput("firstName", "text", "Hunter", <User />)}
            {renderInput("lastName", "text", "Hunt", <User />)}
          </div>

          {/* Email Field */}
          {renderInput("email", "email", "you@example.com", <Mail />)}

          {/* Phone Field */}
          {renderInput("phoneNumber", "tel", "+256 (000) 000-000", <Phone />)}

          {/* Password Fields */}
          {renderInput("password", "password", "••••••••", <Lock />)}
          {renderInput("confirmPassword", "password", "••••••••", <Lock />)}

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-red-700">{error}</p>
              </div>
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
            {isLoading ? "Creating Account..." : isAdminRegister ? "Register as Admin" : "Create Account"}
          </button>
        </form>

        {/* Google Sign In */}
        {!isAdminRegister && (
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

        {/* Sign In Link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-teal-600 hover:text-teal-700 transition-colors">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
