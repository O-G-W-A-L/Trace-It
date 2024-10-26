import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const UserManagement = ({ users, fetchData, showToast }) => {
  const handleDeleteUser = async (userId) => {
    try {
      const userRef = doc(db, 'users', userId);
      await deleteDoc(userRef);
      fetchData();
      showToast('User deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting user:', error);
      showToast('Failed to delete user. Please try again.', 'error');
    }
  };

  const displayUserInfo = (info) => {
    return info || 'Not provided';
  };

  return (
    <div className="space-y-4 p-4">
      <div className="bg-white shadow overflow-x-auto rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Info</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile Details</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Details</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {user.profileImage ? (
                        <img 
                          src={user.profileImage} 
                          alt={user.name} 
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                          {displayUserInfo(user.name)?.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {displayUserInfo(user.name)}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {user.id?.slice(0, 8)}...
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div>Location: {displayUserInfo(user.location)}</div>
                    <div>Age: {displayUserInfo(user.age)}</div>
                    <div>Gender: {displayUserInfo(user.gender)}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div>Email: {displayUserInfo(user.email)}</div>
                    <div>Phone: {displayUserInfo(user.phone)}</div>
                    <div>Alternative Contact: {displayUserInfo(user.alternativeContact)}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {displayUserInfo(user.role)}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">
                    Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    className="text-indigo-600 hover:text-indigo-900 mr-4 transition duration-150 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No users found
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;