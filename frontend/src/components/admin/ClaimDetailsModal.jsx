import React, { useState, useEffect } from 'react';
import { MapPin, MessageCircle, Truck } from 'lucide-react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { handleClaimAction, handleAdditionalActions } from './PaymentActions'; // Ensure this is imported

const ClaimDetailsModal = ({ claim, item, onClose, onClaimAction }) => {
  const [allClaims, setAllClaims] = useState([]);
  const [currentClaimIndex, setCurrentClaimIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showClaimantDetails, setShowClaimantDetails] = useState(false);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [showAdditionalActionsModal, setShowAdditionalActionsModal] = useState(false); // For the additional actions modal

  useEffect(() => {
    const fetchAllClaims = async () => {
      try {
        const claimsRef = collection(db, 'claims');
        const q = query(claimsRef, where('itemId', '==', item.id));
        const querySnapshot = await getDocs(q);
        
        const claims = [];
        querySnapshot.forEach((doc) => {
          claims.push({ id: doc.id, ...doc.data() });
        });
        
        setAllClaims(claims);
        const index = claims.findIndex(c => c.id === claim.id);
        setCurrentClaimIndex(index !== -1 ? index : 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching claims:', error);
        setLoading(false);
      }
    };

    fetchAllClaims();
  }, [item.id, claim.id]);

  const handleClaimActionWrapper = async (action, itemId, claimId) => {
    const currentClaim = allClaims[currentClaimIndex];
    const result = await handleClaimAction(action, itemId, claimId, allClaims, currentClaim);
    if (result.success) {
      setAllClaims(result.updatedClaims);
      await onClaimAction(action, itemId, claimId);
    }
  };

  const handleAdditionalActionsWrapper = async (action) => {
    const currentClaim = allClaims[currentClaimIndex];
    await handleAdditionalActions(action, currentClaim, item);
    setShowAdditionalActionsModal(false); // Close the modal after action is taken
  };

  const navigateClaims = (direction) => {
    const newIndex = currentClaimIndex + direction;
    if (newIndex >= 0 && newIndex < allClaims.length) {
      setCurrentClaimIndex(newIndex);
    }
  };

  const handleClaimantDetailsClick = () => {
    setShowClaimantDetails(!showClaimantDetails);
  };

  const handleItemDetailsClick = () => {
    setShowItemDetails(!showItemDetails); 
  };

  const currentClaim = allClaims[currentClaimIndex] || claim;

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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Claim Details</h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Claim {currentClaimIndex + 1} of {allClaims.length}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => navigateClaims(-1)}
                disabled={currentClaimIndex === 0}
                className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => navigateClaims(1)}
                disabled={currentClaimIndex === allClaims.length - 1}
                className="px-3 py-1 bg-gray-100 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Claims Overview</h3>
          <div className="space-y-2">
            {allClaims.map((c, index) => (
              <div 
                key={c.id} 
                className={`flex justify-between items-center p-2 rounded
                  ${index === currentClaimIndex ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}
                  ${c.status === 'approved' ? 'bg-green-50' : ''}
                  ${c.status === 'rejected' ? 'bg-red-50' : ''}`}
              >
                <span>{c.userEmail}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Status: {c.status || 'pending'}
                    {c.canReclaim && c.status === 'rejected' && ' (Can Reclaim)'}
                  </span>
                  {index === currentClaimIndex && (
                    <span className="text-blue-500 text-sm">(Current)</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Item Details</h3>
              <div 
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                onClick={handleItemDetailsClick} 
              >
                <p><span className="font-medium">Name:</span> {item.name}</p>
                <p><span className="font-medium">Category:</span> {item.category}</p>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <p><span className="font-medium">Location Found:</span> {item.location}</p>
                </div>
                {showItemDetails && (
                  <div className="space-y-2 mt-3">
                    <p><span className="font-medium">Date Found:</span> {item.dateFound}</p>
                    <p><span className="font-medium">Unique Identifiers:</span> {item.uniqueIdentifiers}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Additional Actions</h3>
              <button
                onClick={() => setShowAdditionalActionsModal(true)} // Show the modal when clicked
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Open Additional Actions
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Claimant Details</h3>
              <div 
                className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                onClick={handleClaimantDetailsClick}
              >
                <p><span className="font-medium">Email:</span> {currentClaim.userEmail}</p>
                <div className="flex items-start">
                  <Truck className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <p><span className="font-medium">Address:</span> {currentClaim.address}</p>
                </div>
                {showClaimantDetails && (
                  <div className="space-y-2 mt-3">
                    <p><span className="font-medium">Phone:</span> {currentClaim.phone}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleClaimActionWrapper('approve', item.id, currentClaim.id)}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                disabled={currentClaim.status === 'approved'}
              >
                Approve Claim
              </button>
              <button
                onClick={() => handleClaimActionWrapper('reject', item.id, currentClaim.id)}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                disabled={currentClaim.status === 'rejected'}
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

        {/* Modal for Additional Actions */}
        {showAdditionalActionsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
              <h3 className="text-xl font-bold">Choose an Action</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleAdditionalActionsWrapper('payment_reminder')}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Send Payment Reminder
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('payment_received')}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Confirm Payment Received
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('verification_needed')}
                  className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Request Verification
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('delivery_scheduled')}
                  className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                >
                  Send Delivery Details
                </button>
              </div>
              <button
                onClick={() => setShowAdditionalActionsModal(false)} // Close modal
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimDetailsModal;
