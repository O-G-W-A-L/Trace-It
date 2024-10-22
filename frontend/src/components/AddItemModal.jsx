import React, { useState } from 'react';

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [newItem, setNewItem] = useState({ type: '', name: '', details: '', location: '', category: '', status: '', image: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem({ type: '', name: '', details: '', location: '', category: '', status: '', image: null });
    onClose();
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setNewItem({ ...newItem, image: e.target.files[0] });
    }
  };

  const handleCancel = () => {
    setNewItem({ type: '', name: '', details: '', location: '', category: '', status: '', image: null });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center backdrop-blur-sm">
      <div 
        className="relative mx-auto p-8 border w-full max-w-md shadow-xl rounded-lg bg-white transform transition-all"
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6 sticky top-0 bg-white pt-2">
          <h3 className="text-2xl font-bold text-gray-900">Add New Item</h3>
          <p className="text-gray-600 mt-1">Fill in the details below to add a new item</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {['type', 'name', 'location', 'category', 'status'].map((field) => (
              <div key={field} className="col-span-2 sm:col-span-1">
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={field}
                  id={field}
                  value={newItem[field]}
                  onChange={(e) => setNewItem({...newItem, [field]: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                  required
                  placeholder={`Enter ${field}`}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              value={newItem.details}
              onChange={(e) => setNewItem({...newItem, details: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
              required
              placeholder="Enter item details..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      onChange={handleImageChange}
                      className="sr-only"
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6 sticky bottom-0 bg-white py-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;