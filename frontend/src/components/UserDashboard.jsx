import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, CreditCard, Book, Briefcase, Package, MapPin, LogOut } from 'lucide-react';
import axios from 'axios';

const categories = [
  { id: 'national-ids', name: 'National IDs', icon: CreditCard },
  { id: 'number-plates', name: 'Number Plates', icon: CreditCard },
  { id: 'driving-permits', name: 'Driving Permits', icon: CreditCard },
  { id: 'academic-documents', name: 'Academic Documents', icon: Book },
  { id: 'other-items', name: 'Other Items', icon: Package },
];

const UserDashboard = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
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
    fetchItems();
  }, []);

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

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Lost Items</h1>
          
          <div className="mb-8">
            <div className="max-w-xl relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search for lost items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`}>
                <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition cursor-pointer">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <category.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{category.name}</dt>
                          <dd className="text-lg font-medium text-gray-900">Search</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
