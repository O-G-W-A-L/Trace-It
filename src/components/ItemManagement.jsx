import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Eye, Search, MapPin, Bell } from 'lucide-react';
import { 
  doc, 
  updateDoc, 
  getDoc, 
  collection, 
  addDoc, 
  serverTimestamp,
  onSnapshot,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import ClaimDetailsModal from './ClaimDetailsModal';

const ItemManagement = ({ onAddItem, onDeleteItem, onEditItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [activeTab, setActiveTab] = useState('available');
  const [showNotifications, setShowNotifications] = useState(false);
  const [claimDetailsModal, setClaimDetailsModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [items, setItems] = useState([]);

  const categories = ['All Categories', 'National IDs', 'Number Plates', 'Driving Permits', 'Academic Documents', 'Other Items'];
  const tabs = [
    { id: 'available', label: 'Available Items' },
    { id: 'pending', label: 'Pending Claims' },
    { id: 'claimed', label: 'Claimed Items' }
  ];

  // Set up real-time listener for items
  useEffect(() => {
    const itemsRef = collection(db, 'items');
    const q = query(itemsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const itemsData = [];
      snapshot.forEach((doc) => {
        itemsData.push({ id: doc.id, ...doc.data() });
      });
      setItems(itemsData);
    }, (error) => {
      console.error("Error fetching items:", error);
      showToast('Error fetching items', 'error');
    });

    return () => unsubscribe();
  }, []);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = (item.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (item.details?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || filterCategory === 'All Categories' ||
      item.category === filterCategory;
    const matchesStatus = activeTab === 'available' ? item.status === 'unclaimed' :
      activeTab === 'pending' ? item.status === 'pending_claim' :
      item.status === 'claimed';
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleClaimAction = async (action, itemId, claimId) => {
    try {
      const itemRef = doc(db, 'items', itemId);
      const claimRef = doc(db, 'claims', claimId);

      if (action === 'approve') {
        await updateDoc(itemRef, {
          status: 'claimed',
          approvedClaimId: claimId,
          approvedAt: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });
        
        await updateDoc(claimRef, {
          status: 'approved',
          approvedAt: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });

        await addDoc(collection(db, 'notifications'), {
          type: 'claim_approved',
          itemId,
          claimId,
          timestamp: serverTimestamp(),
          read: false,
          userId: claimDetailsModal.claim.userId
        });

        showToast('Claim approved successfully', 'success');
      } else {
        await updateDoc(itemRef, {
          status: 'unclaimed',
          claims: [],
          rejectedAt: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });
        
        await updateDoc(claimRef, {
          status: 'rejected',
          rejectedAt: serverTimestamp(),
          lastUpdated: serverTimestamp()
        });

        await addDoc(collection(db, 'notifications'), {
          type: 'claim_rejected',
          itemId,
          claimId,
          timestamp: serverTimestamp(),
          read: false,
          userId: claimDetailsModal.claim.userId
        });

        showToast('Claim rejected successfully', 'success');
      }

      setClaimDetailsModal(null);
    } catch (error) {
      console.error(`Error ${action}ing claim:`, error);
      showToast(`Error ${action}ing claim`, 'error');
    }
  };

  const viewClaimDetails = async (item) => {
    try {
      if (item.claims && item.claims.length > 0) {
        const claimRef = doc(db, 'claims', item.claims[0]);
        const claimSnap = await getDoc(claimRef);
        if (claimSnap.exists()) {
          setClaimDetailsModal({
            claim: { id: claimSnap.id, ...claimSnap.data() },
            item: item
          });
        }
      }
    } catch (error) {
      console.error('Error fetching claim details:', error);
      showToast('Error fetching claim details', 'error');
    }
  };

  // The rest of your component remains exactly the same
  return (
    <div className="p-4">
      {toast && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white z-50`}>
          {toast.message}
        </div>
      )}

      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onAddItem}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Add New Item
          </button>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
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

        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-10 w-10 rounded-full mr-3"
                        />
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.details}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{item.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'unclaimed'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'pending_claim'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {item.status === 'pending_claim' && (
                        <button
                          onClick={() => viewClaimDetails(item)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      )}
                      <button
                        onClick={() => onEditItem(item)}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => onDeleteItem(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
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
          onClaimAction={handleClaimAction}
        />
      )}
    </div>
  );
};

export default ItemManagement;