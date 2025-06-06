import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Eye, Search, MapPin, Plus, Filter, Grid, List } from 'lucide-react';
import { 
  doc, 
  updateDoc, 
  getDoc, 
  deleteDoc, 
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  collection 
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import ClaimDetailsModal from './ClaimDetailsModal';
import EditItemModal from './EditItemModal';

const ItemManagement = ({ onAddItem, currentUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [activeTab, setActiveTab] = useState('available');
  const [claimDetailsModal, setClaimDetailsModal] = useState(null);
  const [editItemModal, setEditItemModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [items, setItems] = useState([]);
  const [viewMode, setViewMode] = useState('table');

  const categories = ['All Categories', 'National IDs', 'Number Plates', 'Driving Permits', 'Academic Documents', 'Other Items'];
  const tabs = [
    { id: 'available', label: 'Available Items', count: items.filter(i => i.status === 'unclaimed').length },
    { id: 'pending', label: 'Pending Claims', count: items.filter(i => i.status === 'pending_claim').length },
    { id: 'claimed', label: 'Claimed Items', count: items.filter(i => i.status === 'claimed').length }
  ];

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

  const handleDeleteItem = async (itemId) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const itemRef = doc(db, 'items', itemId);
      const itemSnap = await getDoc(itemRef);
      
      if (!itemSnap.exists()) {
        showToast('Item not found', 'error');
        return;
      }

      const itemData = itemSnap.data();
      if (itemData.claims && itemData.claims.length > 0) {
        for (const claimId of itemData.claims) {
          const claimRef = doc(db, 'claims', claimId);
          await deleteDoc(claimRef);
        }
      }

      await deleteDoc(itemRef);
      showToast('Item deleted successfully', 'success');

    } catch (error) {
      console.error('Error deleting item:', error);
      showToast('Error deleting item', 'error');
    }
  };

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

        showToast('Claim rejected successfully', 'success');
      }

      setClaimDetailsModal(null);
    } catch (error) {
      console.error(`Error ${action}ing claim:`, error);
      showToast(`Error ${action}ing claim`, 'error');
    }
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

  const handleEditItem = (item) => {
    setEditItemModal(item);
  };

  const handleSaveEdit = async (updatedItem) => {
    try {
      const itemRef = doc(db, 'items', updatedItem.id);
      await updateDoc(itemRef, {
        ...updatedItem,
        lastUpdated: serverTimestamp()
      });
      showToast('Item updated successfully', 'success');
      setEditItemModal(null);
    } catch (error) {
      console.error('Error updating item:', error);
      showToast('Error updating item', 'error');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unclaimed':
        return 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200';
      case 'pending_claim':
        return 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200';
      case 'claimed':
        return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-6">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 p-4 rounded-xl shadow-2xl backdrop-blur-md border z-50 transform transition-all duration-300 ${
          toast.type === 'success' 
            ? 'bg-gradient-to-r from-emerald-500/90 to-teal-500/90 text-white border-emerald-300' 
            : 'bg-gradient-to-r from-red-500/90 to-pink-500/90 text-white border-red-300'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span className="font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Title and Add Button */}
          <div className="flex items-center justify-between">
            <button
              onClick={onAddItem}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="h-5 w-5" />
              <span className="font-medium">Add New Item</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search items by name or details..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-200 focus:border-teal-400 transition-all duration-300 appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'table' 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:shadow-md'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                activeTab === tab.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Items Display */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
        {viewMode === 'table' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b border-teal-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800">Item</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredItems.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 transition-all duration-300">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl || "/placeholder.svg"}
                            alt={item.name}
                            className="h-12 w-12 rounded-xl object-cover border-2 border-white shadow-md"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center border-2 border-white shadow-md">
                            <span className="text-teal-600 font-semibold text-sm">
                              {item.name?.charAt(0)?.toUpperCase() || '?'}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600 max-w-xs truncate">{item.details}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <MapPin className="h-4 w-4 text-teal-500" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                        {item.status?.replace('_', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {item.status === 'pending_claim' && (
                          <button
                            onClick={() => viewClaimDetails(item)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-300 hover:scale-110"
                            title="View Claims"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleEditItem(item)}
                          className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg transition-all duration-300 hover:scale-110"
                          title="Edit Item"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-300 hover:scale-110"
                          title="Delete Item"
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-teal-600">
                      {item.name?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.details}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-4 w-4 text-teal-500" />
                    <span className="text-sm text-gray-700">{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status?.replace('_', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1">
                      {item.status === 'pending_claim' && (
                        <button
                          onClick={() => viewClaimDetails(item)}
                          className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-300"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleEditItem(item)}
                        className="p-1.5 text-amber-600 hover:bg-amber-100 rounded-lg transition-all duration-300"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-all duration-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or add a new item.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {claimDetailsModal && (
        <ClaimDetailsModal
          claim={claimDetailsModal.claim}
          item={claimDetailsModal.item}
          onClose={() => setClaimDetailsModal(null)}
          onClaimAction={handleClaimAction}
        />
      )}

      {editItemModal && (
        <EditItemModal
          item={editItemModal}
          onSave={handleSaveEdit}
          onClose={() => setEditItemModal(null)}
        />
      )}
    </div>
  );
};

export default ItemManagement;
