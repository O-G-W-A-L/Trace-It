"use client"

import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { X, Save, Edit2, User, Shield } from "lucide-react"

const EditItemModal = ({ item, onSave, onClose }) => {
  const [updatedItem, setUpdatedItem] = useState(item)
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUpdatedItem(item)
    if (item?.addedBy?.id) {
      fetchUserDetails(item.addedBy.id)
    } else {
      setLoading(false)
    }
  }, [item])

  const fetchUserDetails = async (userId) => {
    try {
      const userSnap = await getDoc(doc(db, "users", userId))
      if (userSnap.exists()) {
        const userData = userSnap.data()
        setUser(userData.fullName)
        setRole(userData.role)
      } else {
        console.log("No user found with ID:", userId)
      }
    } catch (error) {
      console.error("Error fetching user details:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUpdatedItem({ ...updatedItem, [name]: value })
  }

  const handleSave = () => {
    onSave(updatedItem)
    setIsEditing(false)
  }

  const fields = [
    { name: "type", label: "Type", type: "text" },
    { name: "name", label: "Name", type: "text" },
    { name: "details", label: "Details", type: "textarea" },
    { name: "location", label: "Location", type: "text" },
    { name: "category", label: "Category", type: "text" },
    { name: "dateFound", label: "Date Found", type: "date" },
    { name: "uniqueIdentifiers", label: "Unique Identifiers", type: "text" },
  ]

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-white/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Edit Item</h3>
              <p className="text-teal-100">Modify item details and information</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-colors" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* User Info */}
          {!loading && (
            <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-teal-50 rounded-2xl border border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl">
                  {role === "admin" ? (
                    <Shield className="h-5 w-5 text-white" />
                  ) : (
                    <User className="h-5 w-5 text-white" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-slate-600">Added by:</p>
                  <p className="font-semibold text-slate-800">
                    {role ? (role === "admin" ? "Admin" : "User") : "Unknown Role"} - {user || "No name available"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                {isEditing ? (
                  field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={updatedItem[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                      rows={4}
                      placeholder={field.label}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={updatedItem[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                      placeholder={field.label}
                    />
                  )
                ) : (
                  <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700">
                    {updatedItem[field.name] || "Not specified"}
                  </div>
                )}
              </div>
            ))}

            {/* Image Section */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Item Image</label>
              {updatedItem.imageUrl && (
                <div className="mb-4">
                  <img
                    src={updatedItem.imageUrl || "/placeholder.svg"}
                    alt="Item"
                    className="w-full max-w-md h-48 object-cover rounded-xl border border-slate-200"
                  />
                </div>
              )}
              {isEditing && (
                <input
                  type="file"
                  name="image"
                  onChange={(e) => handleInputChange({ target: { name: "image", value: e.target.files[0] } })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  accept="image/*"
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Edit2 className="h-4 w-4 mr-2" />
              <span>{isEditing ? "Cancel Edit" : "Edit Item"}</span>
            </button>
            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Save className="h-4 w-4 mr-2" />
                <span>Save Changes</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditItemModal
