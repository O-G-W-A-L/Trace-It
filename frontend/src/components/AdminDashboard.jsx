import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import ItemManagement from './ItemManagement';
import UserManagement from './UserManagement';
import MessageManagement from './MessageManagement';
import AddItemModal from './AddItemModal';
import { LogOut, MapPin } from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('items');
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [itemsResponse, usersResponse, messagesResponse] = await Promise.all([
        axios.get('http://localhost:5000/items', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }),
        axios.get('http://localhost:5000/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }),
        axios.get('http://localhost:5000/messages', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
      ]);

      setItems(itemsResponse.data);
      setUsers(usersResponse.data);
      setMessages(messagesResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      showToast('Error fetching data. Please try again.', 'error');
      setIsLoading(false);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const formData = new FormData();
      for (const key in newItem) {
        formData.append(key, newItem[key]);
      }
      await axios.post('http://localhost:5000/items', formData, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchData();
      setIsAddItemModalOpen(false);
      showToast('Item added successfully', 'success');
    } catch (error) {
      console.error('Error adding item:', error);
      showToast('Failed to add item. Please try again.', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-2xl font-bold text-gray-800">TraceIt Admin</span>
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={onLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <>
                {activeTab === 'items' && (
                  <ItemManagement 
                    items={items} 
                    onAddItem={() => setIsAddItemModalOpen(true)} 
                  />
                )}
                {activeTab === 'users' && <UserManagement users={users} fetchData={fetchData} showToast={showToast} />}
                {activeTab === 'messages' && (
                  <MessageManagement 
                    messages={messages} 
                    users={users} 
                    fetchData={fetchData} 
                    showToast={showToast}
                  />
                )}
              </>
            )}
          </div>
        </main>
      </div>
      {isAddItemModalOpen && (
        <AddItemModal 
          isOpen={isAddItemModalOpen} 
          onClose={() => setIsAddItemModalOpen(false)} 
          onAddItem={handleAddItem}
        />
      )}
      {toast && (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;