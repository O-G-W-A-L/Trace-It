import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Package, MapPin, LogOut, MessageCircle } from 'lucide-react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import MessagePanel from './MessagesPanel';

const UserDashboard = ({ user, onLogout }) => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isMessagePanelOpen, setIsMessagePanelOpen] = useState(false);

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
  }, [activeCategory]);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      let itemsQuery;
      if (activeCategory === 'All') {
        itemsQuery = query(collection(db, 'items'));
      } else {
        itemsQuery = query(
          collection(db, 'items'),
          where('category', '==', activeCategory)
        );
      }

      const querySnapshot = await getDocs(itemsQuery);
      const itemsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsData);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.details?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <MapPin className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">TraceIt</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-200 transition flex items-center"
              >
                <User className="h-5 w-5 mr-2" />
                Profile
              </Link>
              <button
                onClick={() => setIsMessagePanelOpen(!isMessagePanelOpen)}
                className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-200 transition flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Messages
              </button>
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

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Main Content */}
          <div className={`flex-1 transition-all ${isMessagePanelOpen ? 'mr-96' : ''}`}>
            {/* Search Bar */}
            <div className="px-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="px-4 mb-6">
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {filteredItems.map((item) => (
                  <Link
                    to={`/item/${item.id}`}
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition"
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
                      <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                      <p className="text-sm text-gray-500 mt-1">Location: {item.location}</p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.status === 'unclaimed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Message Panel */}
          {isMessagePanelOpen && (
            <div className="fixed right-0 top-16 bottom-0 w-96 bg-white shadow-lg border-l">
              <MessagePanel
                currentUser={user}
                isOpen={isMessagePanelOpen}
                onClose={() => setIsMessagePanelOpen(false)}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;