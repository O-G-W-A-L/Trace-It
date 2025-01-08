import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../firebase/config';

const AddItemModal = ({ isOpen, onClose, onAddItem, currentUser }) => {
  const initialState = {
    type: '',
    name: '',
    details: '',
    location: '',
    category: '',
    status: 'unclaimed',
    image: null,
    dateFound: '',
    uniqueIdentifiers: '',
  };

  const [newItem, setNewItem] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    'National IDs',
    'Number Plates',
    'Driving Permits',
    'Academic Documents',
    'Other Items',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = '';

      // Upload image if exists
      if (newItem.image) {
        const storageRef = ref(storage, `items/${Date.now()}_${newItem.image.name}`);
        const uploadResult = await uploadBytes(storageRef, newItem.image);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      // Ensure currentUser exists and has the necessary properties
      if (!currentUser || !currentUser.uid) {
        throw new Error('User not authenticated');
      }

      // Determine if the currentUser is an admin
      const addedBy = currentUser && currentUser.role === 'admin' 
        ? { id: currentUser.uid, name: currentUser.displayName || 'Admin User' }
        : { id: currentUser.uid, name: currentUser.displayName || 'Unknown User' };

      // Add item to Firestore
      const itemData = {
        ...newItem,
        imageUrl,
        status: 'unclaimed',
        createdAt: serverTimestamp(),
        claims: [],
        addedBy, // Updated to reflect the role of the user
      };

      delete itemData.image; // Remove the file object before storing

      await addDoc(collection(db, 'items'), itemData);

      onAddItem(); // Refresh the items list
      setNewItem(initialState);
      setImagePreview(null);
      onClose();
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Error adding item. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewItem({ ...newItem, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setNewItem(initialState);
    setImagePreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm">
      <div 
        className="relative mx-auto p-8 border w-full max-w-md shadow-xl rounded-lg bg-white transform transition-all"
        style={{ maxHeight: '90vh', overflowY: 'auto', marginTop: '2rem', marginBottom: '2rem' }}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Item</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <input
              type="text"
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Details Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              value={newItem.details}
              onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              rows={3}
              required
            />
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location Found</label>
            <input
              type="text"
              value={newItem.location}
              onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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

          {/* Date Found Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date Found</label>
            <input
              type="date"
              value={newItem.dateFound}
              onChange={(e) => setNewItem({ ...newItem, dateFound: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Unique Identifiers Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Unique Identifiers</label>
            <input
              type="text"
              value={newItem.uniqueIdentifiers}
              onChange={(e) => setNewItem({ ...newItem, uniqueIdentifiers: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Serial numbers, distinguishing marks, etc."
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mx-auto h-32 w-auto object-cover"
                    />
                  </div>
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Adding...' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
