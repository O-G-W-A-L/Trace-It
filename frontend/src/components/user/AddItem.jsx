import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../../firebase/config';

const AddItem = ({ onAddItem }) => {
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

      // Add item to Firestore
      const itemData = {
        ...newItem,
        imageUrl,
        createdAt: serverTimestamp(),
        claims: [],
      };

      delete itemData.image; // Remove the file object before storing

      await addDoc(collection(db, 'items'), itemData);

      onAddItem(); // Refresh items list
      setNewItem(initialState);
      setImagePreview(null);
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

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add a New Item</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {/* Input fields */}
        {Object.entries(initialState).map(([key, value]) =>
          key !== 'image' && key !== 'status' && key !== 'claims' ? (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{key}</label>
              {key === 'category' ? (
                <select
                  value={newItem[key]}
                  onChange={(e) => setNewItem({ ...newItem, [key]: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              ) : key === 'details' ? (
                <textarea
                  value={newItem[key]}
                  onChange={(e) => setNewItem({ ...newItem, [key]: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  required
                />
              ) : (
                <input
                  type={key === 'dateFound' ? 'date' : 'text'}
                  value={newItem[key]}
                  onChange={(e) => setNewItem({ ...newItem, [key]: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                  required
                />
              )}
            </div>
          ) : null
        )}

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md" />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Adding Item...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default AddItem;

