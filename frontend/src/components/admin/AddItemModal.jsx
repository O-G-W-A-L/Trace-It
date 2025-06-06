"use client"

import { useState } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { db, storage } from "../../firebase/config"
import { serverTimestamp } from "firebase/firestore"
import { X, Upload, Calendar, MapPin, Tag, FileText, ImageIcon } from 'lucide-react'

const AddItemModal = ({ isOpen, onClose, onAddItem, currentUser }) => {
  const initialState = {
    type: "",
    name: "",
    details: "",
    location: "",
    category: "",
    status: "unclaimed",
    image: null,
    dateFound: "",
    uniqueIdentifiers: "",
  }

  const [newItem, setNewItem] = useState(initialState)
  const [imagePreview, setImagePreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const categories = ["National IDs", "Number Plates", "Driving Permits", "Academic Documents", "Other Items"]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let imageUrl = ""

      // Upload image if exists
      if (newItem.image) {
        const storageRef = ref(storage, `items/${Date.now()}_${newItem.image.name}`)
        const uploadResult = await uploadBytes(storageRef, newItem.image)
        imageUrl = await getDownloadURL(uploadResult.ref)
      }

      // Ensure currentUser exists and has the necessary properties
      if (!currentUser || !currentUser.uid) {
        throw new Error("User not authenticated")
      }

      // Determine if the currentUser is an admin
      const addedBy =
        currentUser && currentUser.role === "admin"
          ? { id: currentUser.uid, name: currentUser.displayName || "Admin User" }
          : { id: currentUser.uid, name: currentUser.displayName || "Unknown User" }

      // Add item to Firestore
      const itemData = {
        ...newItem,
        imageUrl,
        status: "unclaimed",
        createdAt: serverTimestamp(),
        claims: [],
        addedBy,
      }

      delete itemData.image // Remove the file object before storing

      await addDoc(collection(db, "items"), itemData)

      onAddItem() // Refresh the items list
      setNewItem(initialState)
      setImagePreview(null)
      onClose()
    } catch (error) {
      console.error("Error adding item:", error)
      alert("Error adding item. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setNewItem({ ...newItem, image: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCancel = () => {
    setNewItem(initialState)
    setImagePreview(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-2xl border border-white/20 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white rounded-t-3xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Add New Item</h2>
              <p className="text-teal-100">Register a found item in the system</p>
            </div>
            <button
              onClick={handleCancel}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Type and Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-teal-600" />
                  Item Type
                </label>
                <input
                  type="text"
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., Phone, Wallet, Keys..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-teal-600" />
                  Item Name
                </label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Specific name or description"
                  required
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-teal-600" />
                Description
              </label>
              <textarea
                value={newItem.details}
                onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={4}
                placeholder="Detailed description of the item..."
                required
              />
            </div>

            {/* Location and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                  Location Found
                </label>
                <input
                  type="text"
                  value={newItem.location}
                  onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Where was this item found?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                  Date Found
                </label>
                <input
                  type="date"
                  value={newItem.dateFound}
                  onChange={(e) => setNewItem({ ...newItem, dateFound: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Category and Identifiers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-teal-600" />
                  Category
                </label>
                <select
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-teal-600" />
                  Unique Identifiers
                </label>
                <input
                  type="text"
                  value={newItem.uniqueIdentifiers}
                  onChange={(e) => setNewItem({ ...newItem, uniqueIdentifiers: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Serial numbers, marks, etc."
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                <ImageIcon className="h-4 w-4 mr-2 text-teal-600" />
                Item Image
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-teal-400 transition-colors">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="mx-auto h-32 w-auto object-cover rounded-lg" />
                    <p className="text-sm text-slate-600">Image selected</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="mx-auto h-12 w-12 text-slate-400" />
                    <div>
                      <label className="cursor-pointer">
                        <span className="text-teal-600 hover:text-teal-700 font-medium">Upload a file</span>
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                      </label>
                      <p className="text-slate-500 text-sm mt-1">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Always Visible */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 rounded-b-3xl flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto px-6 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  <span>Adding...</span>
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  <span>Add Item</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItemModal
