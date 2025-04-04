import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, User, MapPin, LogOut, MessageCircle, X, Bell, Settings, ChevronDown, ChevronUp 
} from 'lucide-react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import MessagePanel from './MessagesPanel';
import AddItemModal from '../admin/AddItemModal';
import Footer from './Footer';

const UserDashboard = ({ user, onLogout }) => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const categories = [
    'All',
    'National IDs',
    'Number Plates',
    'Driving Permits',
    'Academic Documents',
    'Other Items'
  ];

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      let itemsQuery;
      if (activeCategory === 'All') {
        itemsQuery = query(
          collection(db, 'items'),
          where('status', '!=', 'claimed') // Exclude claimed items
        );
      } else {
        itemsQuery = query(
          collection(db, 'items'),
          where('category', '==', activeCategory),
          where('status', '!=', 'claimed') // Exclude claimed items for the active category
        );
      }

      const querySnapshot = await getDocs(itemsQuery);
      const fetchedItems = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          dateAdded: data.dateAdded?.toDate() || new Date(),
        };
      });
      setItems(fetchedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = () => {
    setIsAddItemModalOpen(true);
  };

  const handleItemAdded = () => {
    setIsAddItemModalOpen(false);
    fetchItems();
  };

  const formatDate = (date) => {
    if (!date) return 'Unknown date';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  const stats = useMemo(() => ({
    total: items.length,
    unclaimed: items.filter((item) => item.status === 'unclaimed').length,
    claimed: items.filter((item) => item.status === 'claimed').length,
  }), [items]);

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">TraceIt</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="text-gray-600 hover:text-blue-600 transition" 
                aria-label="Notifications"
              >
                <Bell className="h-6 w-6" />
              </button>
              <Link 
                to="/profile" 
                className="text-gray-600 hover:text-blue-600 transition" 
                aria-label="Profile"
              >
                <User className="h-6 w-6" />
              </Link>
              <button 
                onClick={() => setIsMessagePanelOpen(!isMessagePanelOpen)} 
                className="text-gray-600 hover:text-blue-600 transition"
                aria-label={isMessagePanelOpen ? "Close messages" : "Open messages"}
              >
                <MessageCircle className="h-6 w-6" />
              </button>
              <Link 
                to="/settings" 
                className="text-gray-600 hover:text-blue-600 transition" 
                aria-label="Settings"
              >
                <Settings className="h-6 w-6" />
              </Link>
              <button 
                onClick={onLogout} 
                className="text-gray-600 hover:text-blue-600 transition"
                aria-label="Logout"
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full py-6 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className={`flex-1 transition-all ${isMessagePanelOpen ? 'md:mr-96' : ''}`}>
            <div className="px-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome back, {user.name}</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-shadow duration-300 ease-in-out"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search 
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
                  aria-hidden="true" 
                />
              </div>
            </div>

            <div className="px-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
                <button
                  onClick={() => setIsStatsVisible(!isStatsVisible)}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
                >
                  {isStatsVisible ? 'Hide Stats' : 'Show Stats'}
                  {isStatsVisible ? 
                    <ChevronUp className="ml-1 h-4 w-4" /> : 
                    <ChevronDown className="ml-1 h-4 w-4" />
                  }
                </button>
              </div>
              <div className={`grid grid-cols-3 gap-4 mb-4 transition-all duration-300 ease-in-out ${isStatsVisible ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="bg-white rounded-lg shadow p-4">
                  <p className="text-sm text-gray-600">Total Items</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <p className="text-sm text-gray-600">Unclaimed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.unclaimed}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <p className="text-sm text-gray-600">Claimed</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.claimed}</p>
                </div>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {filteredItems.map((item) => (
                  <Link 
                    to={`/item/${item.id}`} 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="p-4">
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-48 object-cover rounded-lg mb-4" 
                        />
                      )}
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.type}</p>
                      <p className="text-sm text-gray-500 mt-1">Location: {item.location}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'unclaimed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          Added: {formatDate(item.dateAdded)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isMessagePanelOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:bg-opacity-0 md:inset-auto md:right-0 md:top-16 md:bottom-0 md:w-96 transition-all duration-300 ease-in-out">
              <div className="bg-white h-full shadow-lg border-l overflow-hidden flex flex-col">
                <div className="p-4 border-b flex justify-between items-center bg-blue-50">
                  <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                  <button 
                    onClick={() => setIsMessagePanelOpen(false)} 
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300" 
                    aria-label="Close messages panel"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <MessagePanel 
                    currentUser={user} 
                    isOpen={isMessagePanelOpen} 
                    onClose={() => setIsMessagePanelOpen(false)} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <AddItemModal 
        isOpen={isAddItemModalOpen} 
        onClose={() => setIsAddItemModalOpen(false)} 
        onAddItem={handleItemAdded} 
        currentUser={user} 
      />

      <Footer />
    </div>
  );
};

export default UserDashboard;
