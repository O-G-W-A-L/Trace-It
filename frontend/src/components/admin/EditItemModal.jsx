import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const EditItemModal = ({ item, onSave, onClose }) => {
  const [updatedItem, setUpdatedItem] = useState(item);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUpdatedItem(item); // Reset updatedItem whenever the item prop changes
    if (item?.addedBy?.id) {
      fetchUserDetails(item.addedBy.id); // Fetch user details if available
    } else {
      setLoading(false); // Set loading to false if no user is linked
    }
  }, [item]);

  const fetchUserDetails = async (userId) => {
    try {
      const userSnap = await getDoc(doc(db, 'users', userId));
      if (userSnap.exists()) {
        const userData = userSnap.data();
        setUser(userData.fullName);
        setRole(userData.role);
      } else {
        console.log('No user found with ID:', userId);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedItem); // Save updated item data
    setIsEditing(false); // Switch out of editing mode
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-hidden">
        <h3 className="text-xl font-semibold mb-4">Edit Item</h3>
        {!loading && (
          <p className="mb-4 text-sm text-gray-700">
            Added by: <span className="font-semibold">
              {role ? (role === 'admin' ? 'Admin' : 'User') : 'Unknown Role'} - {user || 'No name available'}
            </span>
          </p>
        )}
        <div className="overflow-y-auto max-h-[60vh]">
          {['type', 'name', 'details', 'location', 'category', 'dateFound', 'uniqueIdentifiers'].map((field) => (
            <div key={field} className="mb-4">
              <p className="font-semibold">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}:</p>
              {isEditing ? (
                <input
                  type={field === 'dateFound' ? 'date' : 'text'}
                  name={field}
                  value={updatedItem[field] || ''}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border rounded-md"
                  placeholder={field}
                />
              ) : (
                <p>{updatedItem[field]}</p>
              )}
            </div>
          ))}
          <div className="mb-4">
            <p className="font-semibold">Item Image:</p>
            {updatedItem.image && <img src={updatedItem.image} alt="Item" className="w-48 h-48 object-cover mb-4" />}
            {isEditing && (
              <input
                type="file"
                name="image"
                onChange={(e) => handleInputChange({ target: { name: 'image', value: e.target.files[0] } })}
                className="w-full mb-4 p-2 border rounded-md"
              />
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
          <button onClick={() => setIsEditing(!isEditing)} className="px-4 py-2 bg-yellow-600 text-white rounded-md">
            {isEditing ? 'Cancel Edit' : 'Edit Item'}
          </button>
          {isEditing && (
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
