import React, { useState, useEffect } from 'react';
import { MapPin, MessageCircle, Truck } from 'lucide-react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { handleClaimAction, handleAdditionalActions } from './PaymentActions';

const statusLabels = {
  approved: 'Approved',
  rejected: 'Rejected',
  pending: 'Pending',
  pending_review: 'Pending Review',
};

const ClaimDetailsModal = ({ claim, item, onClose, onClaimAction }) => {
  const [allClaims, setAllClaims] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showClaimantDetails, setShowClaimantDetails] = useState(false);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [showAdditionalActionsModal, setShowAdditionalActionsModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const q = query(
          collection(db, 'claims'),
          where('itemId', '==', item.id),
          where('status', '==', 'pending_review')
        );
        const snap = await getDocs(q);
        const claims = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setAllClaims(claims);
        const idx = claims.findIndex(c => c.id === claim.id);
        setCurrentIdx(idx >= 0 ? idx : 0);
      } catch (err) {
        console.error('Error fetching claims:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, [item.id, claim.id]);

  const handleAction = async (action) => {
    const current = allClaims[currentIdx];
    const { success, updatedClaims } = await handleClaimAction(
      action, item.id, current.id, allClaims, current
    );
    if (success) {
      setAllClaims(updatedClaims);
      onClaimAction(action, item.id, current.id);
      
      // Update item status to 'claimed' if approved
      if (action === 'approve') {
        await updateDoc(doc(db, 'items', item.id), { status: 'claimed' });
      }
    }
  };

  const current = allClaims[currentIdx] || claim;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
          <p>Loading claims...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Claim Details</h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Claim {currentIdx + 1} of {allClaims.length}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentIdx(i => Math.max(i - 1, 0))}
                disabled={currentIdx === 0}
                className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentIdx(i => Math.min(i + 1, allClaims.length - 1))}
                disabled={currentIdx === allClaims.length - 1}
                className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Claims Overview</h3>
          <div className="space-y-2">
            {allClaims.map((c, idx) => (
              <div
                key={c.id}
                className={`flex justify-between items-center p-2 rounded
                  ${idx === currentIdx ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}
                  ${c.status === 'approved' ? 'bg-green-50' : ''}
                  ${c.status === 'rejected' ? 'bg-red-50' : ''}
                  ${c.status === 'pending_review' ? 'bg-yellow-100' : ''}`}
              >
                <span>{c.userEmail}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Status: {statusLabels[c.status] || 'Pending'}
                  </span>
                  {idx === currentIdx && (
                    <span className="text-blue-500 text-sm">(Current)</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Item Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Item Details</h3>
            <div onClick={() => setShowItemDetails(v => !v)} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                <p><strong>Location Found:</strong> {item.location}</p>
              </div>
              {showItemDetails && (
                <div className="mt-3 space-y-2">
                  <p><strong>Date Found:</strong> {item.dateFound}</p>
                  <p><strong>Identifiers:</strong> {item.uniqueIdentifiers}</p>
                </div>
              )}
            </div>
          </div>

          {/* Claimant Details & Actions */}
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Claimant Details</h3>
              <div onClick={() => setShowClaimantDetails(v => !v)} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <p><strong>Email:</strong> {current.userEmail}</p>
                <div className="flex items-start">
                  <Truck className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <p><strong>Address:</strong> {current.address}</p>
                </div>
                {showClaimantDetails && (
                  <div className="mt-3 space-y-2">
                    <p><strong>Phone:</strong> {current.phone}</p>
                    <p><strong>Type:</strong> {current.type}</p>
                    <p><strong>Date Lost:</strong> {current.dateLost}</p>
                    <p><strong>Location Lost:</strong> {current.locationLost}</p>
                    <p><strong>Identifiers:</strong> {current.uniqueIdentifiers}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleAction('approve')}
                disabled={current.status === 'approved'}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
              >
                Approve Claim
              </button>
              <button
                onClick={() => handleAction('reject')}
                disabled={current.status === 'rejected'}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
              >
                Reject Claim
              </button>
              <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold text-lg mb-3">Additional Actions</h3>
          <button
            onClick={() => setShowAdditionalActionsModal(true)}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Open Additional Actions
          </button>
        </div>

        {showAdditionalActionsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
              <h3 className="text-xl font-bold">Choose an Action</h3>
              <button
                onClick={() => { 
                  handleAdditionalActions('markForInvestigation', current, item); 
                  setShowAdditionalActionsModal(false); 
                }}
                className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Mark for Investigation
              </button>
              <button
                onClick={() => { 
                  handleAdditionalActions('resolve', current, item); 
                  setShowAdditionalActionsModal(false); 
                }}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Mark as Resolved
              </button>
              <button
                onClick={() => setShowAdditionalActionsModal(false)}
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimDetailsModal;