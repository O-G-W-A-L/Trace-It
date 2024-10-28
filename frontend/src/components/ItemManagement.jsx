import React, { useState } from 'react';
import { Edit, Trash2, Eye, Search, Bell, CheckCircle, XCircle } from 'lucide-react';

const ItemManagement = ({ items, onAddItem, onDeleteItem, onEditItem, onApproveClaim, onRejectClaim }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [activeTab, setActiveTab] = useState('available');
  const [showNotifications, setShowNotifications] = useState(false);
  const [claimDetailsModal, setClaimDetailsModal] = useState(null);

  const categories = ['All Categories', 'National IDs', 'Number Plates', 'Driving Permits', 'Academic Documents', 'Other Items'];
  const tabs = [
    { id: 'available', label: 'Available Items' },
    { id: 'pending', label: 'Pending Claims' },
    { id: 'claimed', label: 'Claimed Items' }
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || filterCategory === 'All Categories' ||
      item.category === filterCategory;
    const matchesStatus = activeTab === 'available' ? item.status === 'unclaimed' :
      activeTab === 'pending' ? item.status === 'pending_claim' :
      item.status === 'claimed';
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleClaimAction = async (action, itemId, claimId) => {
    try {
      await (action === 'approve' ? onApproveClaim(itemId, claimId) : onRejectClaim(itemId, claimId));
      setClaimDetailsModal(null);
    } catch (error) {
      console.error(`Error ${action}ing claim:`, error);
    }
  };

  const ClaimDetailsModal = ({ claim, item, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-xl font-bold mb-4">Claim Details</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Item Details</h3>
            <p><span className="font-medium">Name:</span> {item.name}</p>
            <p><span className="font-medium">Category:</span> {item.category}</p>
            <p><span className="font-medium">Location Found:</span> {item.location}</p>
            <p><span className="font-medium">Date Found:</span> {new Date(item.dateFound).toLocaleDateString()}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Claimant Details</h3>
            <p><span className="font-medium">Email:</span> {claim.userEmail}</p>
            <p><span className="font-medium">Contact:</span> {claim.contactInformation}</p>
            <p><span className="font-medium">Identification:</span> {claim.identificationDetails}</p>
            <p><span className="font-medium">Notes:</span> {claim.additionalNotes}</p>
          </div>
        </div>
        {(item.status === 'pending_claim' || item.status === 'unclaimed') && (
          <div className="space-y-4">
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Delivery and Cost Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="number" placeholder="Delivery Cost" className="border rounded p-2" />
                <input type="text" placeholder="Estimated Delivery Time" className="border rounded p-2" />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button onClick={() => handleClaimAction('reject', item.id, claim.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Reject Claim
              </button>
              <button onClick={() => handleClaimAction('approve', item.id, claim.id)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Approve Claim
              </button>
            </div>
          </div>
        )}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">×</button>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <button onClick={onAddItem} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors">
            Add New Item
          </button>
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6" />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <h3 className="font-semibold mb-2">Notifications</h3>
                  <p className="text-gray-500 text-sm">No new notifications</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-3 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4 border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Image', 'Name', 'Category', 'Location', 'Status', 'Date Found', 'Actions'].map((header) => (
                  <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-10 w-10 rounded-full object-cover" />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">No img</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'unclaimed' ? 'bg-green-100 text-green-800' :
                      item.status === 'pending_claim' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{new Date(item.dateFound).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      {(item.status === 'pending_claim' || item.status === 'claimed') && (
                        <button
                          onClick={() => setClaimDetailsModal({ 
                            item, 
                            claim: item.status === 'claimed' ? item.approvedClaim : item.currentClaim 
                          })}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      )}
                      <button onClick={() => onEditItem(item)} className="text-indigo-600 hover:text-indigo-900">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button onClick={() => onDeleteItem(item._id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {claimDetailsModal && (
        <ClaimDetailsModal
          claim={claimDetailsModal.claim}
          item={claimDetailsModal.item}
          onClose={() => setClaimDetailsModal(null)}
        />
      )}
    </div>
  );
};

export default ItemManagement;