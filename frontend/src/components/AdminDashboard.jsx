import React, { useState, useEffect } from 'react';
import { Plus, MessageCircle, Package, Users, LogOut } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('items');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ type: '', name: '', details: '', location: '', category: '', status: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/items', newItem, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNewItem({ type: '', name: '', details: '', location: '', category: '', status: '' });
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Package className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">TraceIt Admin</span>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={onLogout} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center">
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-screen">
          <nav className="mt-5">
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-gray-700 ${
                activeTab === 'items' ? 'bg-indigo-100 text-indigo-700' : ''
              }`}
              onClick={() => setActiveTab('items')}
            >
              <Package className="h-5 w-5 mr-2" />
              Manage Items
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 mt-2 text-gray-700 ${
                activeTab === 'messages' ? 'bg-indigo-100 text-indigo-700' : ''
              }`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Messages
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 mt-2 text-gray-700 ${
                activeTab === 'users' ? 'bg-indigo-100 text-indigo-700' : ''
              }`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-5 w-5 mr-2" />
              Manage Users
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {activeTab === 'items' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Manage Items</h2>
              <form onSubmit={handleAddItem} className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                    Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    placeholder="Item Type"
                    value={newItem.type}
                    onChange={(e) => setNewItem({...newItem, type: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
                    Details
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="details"
                    placeholder="Item Details"
                    value={newItem.details}
                    onChange={(e) => setNewItem({...newItem, details: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Found Location"
                    value={newItem.location}
                    onChange={(e) => setNewItem({...newItem, location: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                    Category
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    type="text"
                    placeholder="Item Category"
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                    Status
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status"
                    type="text"
                    placeholder="Item Status"
                    value={newItem.status}
                    onChange={(e) => setNewItem({...newItem, status: e.target.value})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Item
                  </button>
                </div>
              </form>
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Item List</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item._id} className="mb-2">
                      {item.name} - {item.category} - {item.status}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Messages</h2>
              {/* Add messaging UI here */}
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Manage Users</h2>
              {/* Add user management UI here */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
