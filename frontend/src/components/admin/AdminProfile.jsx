"use client"

import { useState, useEffect } from "react"
import { User, Mail, Phone, MapPin, Camera, ArrowLeft, Edit2, Save, Calendar, Briefcase, Globe, Sparkles, Shield } from 'lucide-react'
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"

const AdminProfile = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    profileImageUrl: "",
    bio: "",
    occupation: "",
    birthdate: "",
    website: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [status, setStatus] = useState({ loading: true, error: null, success: "" })
  const [newImage, setNewImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const { currentUser } = getAuth()
  const db = getFirestore()
  const storage = getStorage()

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (!currentUser) throw new Error("No user logged in")
        const userData = (await getDoc(doc(db, "users", currentUser.uid))).data() || {}

        setProfile({
          fullName: userData.fullName || "",
          email: currentUser.email || "",
          phone: userData.phone || "",
          address: userData.address || "",
          gender: userData.gender || "",
          profileImageUrl: userData.profileImageUrl || "",
          bio: userData.bio || "",
          occupation: userData.occupation || "",
          birthdate: userData.birthdate || "",
          website: userData.website || "",
        })
      } catch (error) {
        setStatus((prev) => ({ ...prev, error: "Failed to load profile" }))
      } finally {
        setStatus((prev) => ({ ...prev, loading: false }))
      }
    }
    loadProfile()
  }, [currentUser, db])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setNewImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus((prev) => ({ ...prev, loading: true, error: null }))

    try {
      let imageUrl = profile.profileImageUrl
      if (newImage) {
        const imageRef = ref(storage, `profile-images/${currentUser.uid}`)
        await uploadBytes(imageRef, newImage)
        imageUrl = await getDownloadURL(imageRef)
      }

      await updateDoc(doc(db, "users", currentUser.uid), {
        ...profile,
        profileImageUrl: imageUrl,
        updatedAt: new Date(),
      })

      setProfile((prev) => ({ ...prev, profileImageUrl: imageUrl }))
      setStatus((prev) => ({ ...prev, success: "Profile updated successfully ✨" }))
      setIsEditing(false)
      setTimeout(() => setStatus((prev) => ({ ...prev, success: "" })), 3000)
    } catch (error) {
      setStatus((prev) => ({ ...prev, error: "Update failed" }))
    } finally {
      setStatus((prev) => ({ ...prev, loading: false }))
    }
  }

  if (status.loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-8 w-8 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="mt-4 text-slate-600">Loading admin profile...</p>
        </div>
      </div>
    )
  }

  const formFields = [
    { name: "fullName", icon: User, type: "text", placeholder: "Your Full Name" },
    { name: "phone", icon: Phone, type: "tel", placeholder: "Your Phone Number" },
    { name: "address", icon: MapPin, type: "text", placeholder: "Your Address" },
    { name: "occupation", icon: Briefcase, type: "text", placeholder: "Your Occupation" },
    { name: "website", icon: Globe, type: "url", placeholder: "Your Website" },
    { name: "birthdate", icon: Calendar, type: "date", placeholder: "Your Birthdate" },
    { name: "gender", icon: User, type: "select", options: ["male", "female", "other"] },
    { name: "bio", icon: Mail, type: "textarea", placeholder: "Tell us about yourself" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 py-8 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="md:flex">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 p-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="relative group mb-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 transform hover:scale-105">
                    <img
                      src={imagePreview || profile.profileImageUrl || "https://placehold.co/150"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {isEditing && (
                      <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="h-8 w-8 text-white" />
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                      </label>
                    )}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{profile.fullName || "Admin User"}</h2>
                <p className="text-teal-100 mb-2">{profile.email}</p>
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-teal-100 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Administrator
                </div>
                {profile.occupation && (
                  <p className="mt-3 text-teal-200 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {profile.occupation}
                  </p>
                )}
              </div>
            </div>

            {/* Profile Form */}
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 flex items-center">
                    <Shield className="h-8 w-8 mr-3 text-teal-600" />
                    Admin Profile
                    {isEditing && (
                      <span className="ml-3 text-sm text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Editing Mode</span>
                    )}
                  </h3>
                  <p className="text-slate-600 mt-2">Manage your administrative profile and preferences</p>
                </div>
                <button
                  onClick={() => navigate("/admin")}
                  className="flex items-center px-4 py-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-all duration-200"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Dashboard
                </button>
              </div>

              {status.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">{status.error}</div>
              )}
              {status.success && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl">
                  {status.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {formFields.map(({ name, icon: Icon, type, placeholder, options }) => (
                    <div key={name} className={`${type === "textarea" ? "md:col-span-2" : ""}`}>
                      <label className="text-sm font-medium text-slate-700 mb-2 block flex items-center">
                        <Icon className="h-4 w-4 mr-2 text-teal-600" />
                        {name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1")}
                      </label>
                      <div className="relative">
                        {type === "select" ? (
                          <select
                            name={name}
                            value={profile[name] || ""}
                            onChange={(e) => setProfile((prev) => ({ ...prev, [name]: e.target.value }))}
                            disabled={!isEditing}
                            className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
                          >
                            <option value="">Select {name}</option>
                            {options.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt.charAt(0).toUpperCase() + opt.slice(1)}
                              </option>
                            ))}
                          </select>
                        ) : type === "textarea" ? (
                          <textarea
                            name={name}
                            value={profile[name] || ""}
                            onChange={(e) => setProfile((prev) => ({ ...prev, [name]: e.target.value }))}
                            disabled={!isEditing}
                            placeholder={placeholder}
                            rows="4"
                            className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500 resize-none"
                          />
                        ) : (
                          <input
                            type={type}
                            name={name}
                            value={profile[name] || ""}
                            onChange={(e) => setProfile((prev) => ({ ...prev, [name]: e.target.value }))}
                            disabled={!isEditing}
                            placeholder={placeholder}
                            className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-50 disabled:text-slate-500"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t border-slate-200">
                  {isEditing ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={status.loading}
                        className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                      >
                        <Save className="h-5 w-5 mr-2" />
                        {status.loading ? "Saving..." : "Save Changes"}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 flex items-center transform hover:scale-105"
                    >
                      <Edit2 className="h-5 w-5 mr-2" />
                      Edit Profile
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
