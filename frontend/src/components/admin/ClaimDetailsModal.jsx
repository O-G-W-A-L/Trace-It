import React, { useState, useEffect } from 'react';
import { MapPin, MessageCircle, Truck } from 'lucide-react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { handleClaimAction, handleAdditionalActions } from './PaymentActions';

const ClaimDetailsModal = ({ claim, item, onClose, onClaimAction }) => {
  const [allClaims, setAllClaims] = useState([]);
  const [currentClaimIndex, setCurrentClaimIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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
  };

  const navigateClaims = (direction) => {
    const newIndex = currentClaimIndex + direction;
    if (newIndex >= 0 && newIndex < allClaims.length) {
      setCurrentClaimIndex(newIndex);
    }
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
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {item.name}</p>
                <p><span className="font-medium">Category:</span> {item.category}</p>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <p><span className="font-medium">Location Found:</span> {item.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Additional Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleAdditionalActionsWrapper('payment_reminder')}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
                  disabled={currentClaim.status !== 'approved'}
                >
                  Send Payment Reminder
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('payment_received')}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-2"
                  disabled={currentClaim.status !== 'approved'}
                >
                  Confirm Payment Received
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('verification_needed')}
                  className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mb-2"
                  disabled={currentClaim.status !== 'pending'}
                >
                  Request Verification
                </button>
                <button
                  onClick={() => handleAdditionalActionsWrapper('delivery_scheduled')}
                  className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                  disabled={currentClaim.status !== 'approved'}
                >
                  Send Delivery Details
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Claimant Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Email:</span> {currentClaim.userEmail}</p>
                <p><span className="font-medium">Contact:</span> {currentClaim.contactInformation}</p>
                <div className="flex items-start">
                  <MessageCircle className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">Identification Details:</p>
                    <p className="text-gray-600">{currentClaim.identificationDetails}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Delivery Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Region:</span> {currentClaim.deliveryRegion}</p>
                <p><span className="font-medium">District:</span> {currentClaim.deliveryDistrict}</p>
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-gray-500" />
                  <p><span className="font-medium">Delivery Fee:</span> UGX {currentClaim.deliveryFee?.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {currentClaim.additionalNotes && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Additional Notes</h3>
                <p className="text-gray-600">{currentClaim.additionalNotes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={() => handleClaimActionWrapper('reject', item.id, currentClaim.id)}
            disabled={currentClaim.status !== 'pending'}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            Reject Claim
          </button>
          <button
            onClick={() => handleClaimActionWrapper('approve', item.id, currentClaim.id)}
            disabled={currentClaim.status !== 'pending' || item.status === 'claimed'}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            Approve Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetailsModal;

