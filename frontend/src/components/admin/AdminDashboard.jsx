import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Sidebar from './Sidebar';
import ItemManagement from './ItemManagement';
import UserManagement from './UserManagement';
import MessageManagement from './MessageManagement';
import AddItemModal from './AddItemModal';
import { LogOut, MapPin, Menu, X, User } from 'lucide-react'; // Import User icon for the profile button
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { getAuth } from 'firebase/auth';  // Import Firebase Auth to get currentUser

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('items');
  const [data, setData] = useState({ items: [], users: [], messages: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); // Add currentUser state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    // Get the current user on component mount
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);  // Set the currentUser state
    }
    fetchData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const queries = [
        query(collection(db, 'items'), orderBy('dateFound', 'desc')),
        query(collection(db, 'users')),
        query(collection(db, 'messages'), orderBy('timestamp', 'desc')),
      ];
      const [itemsSnapshot, usersSnapshot, messagesSnapshot] = await Promise.all(
        queries.map((q) => getDocs(q))
      );

      setData({
        items: itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        users: usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        messages: messagesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      showToast('Error fetching data. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const contentComponents = {
    items: (
      <ItemManagement
        items={data.items}
        onAddItem={() => setIsAddItemModalOpen(true)}
        onRefresh={fetchData}
      />
    ),
    users: (
      <UserManagement
        users={data.users}
        fetchData={fetchData}
        showToast={showToast}
      />
    ),
    messages: (
      <MessageManagement
        messages={data.messages}
        users={data.users}
        fetchData={fetchData}
        showToast={showToast}
      />
    ),
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-2xl font-bold text-gray-800">
                    Trace-It Admin
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                {/* Profile Button */}
                <button
                  onClick={() => navigate('/admin-profile')}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center text-sm mr-4"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </button>
                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition flex items-center text-sm"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" />
              </div>
            ) : (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {contentComponents[activeTab]}
              </div>
            )}
          </div>
        </main>
      </div>

      {isAddItemModalOpen && currentUser && (
        <AddItemModal
          isOpen={isAddItemModalOpen}
          onClose={() => setIsAddItemModalOpen(false)}
          onAddItem={fetchData}
          showToast={showToast}
          currentUser={currentUser}  // Pass currentUser to AddItemModal
        />
      )}

      {toast && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-2 rounded-md text-white shadow-lg transition-opacity duration-300 ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
