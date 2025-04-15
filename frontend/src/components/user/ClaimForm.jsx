import React, { useState } from 'react';
import { 
  collection, 
  addDoc, 
  serverTimestamp,
  arrayUnion,
  updateDoc,
  doc
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { checkClaimEligibility } from '../admin/AutoClaimApproval';

const ClaimForm = ({ item, currentUser, onClaimSubmit, onCancel, isLoading, totalClaims }) => {
  const [claimDetails, setClaimDetails] = useState({
    identificationDetails: '',
    additionalNotes: '',
    dateLost: '',
    type: '',
    uniqueIdentifiers: '',
    locationLost: '',
  });

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const claim = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: item.id,
        status: 'pending',
        timestamp: serverTimestamp(),
        ...claimDetails
      };

      const claimRef = await addDoc(collection(db, 'claims'), claim);

      // Auto-approval check
      const autoApprovalResult = await checkClaimEligibility(
        claimRef.id,
        { ...claim, userId: currentUser.uid }, // Ensure userId is passed
        item
      );

      if (autoApprovalResult.success && autoApprovalResult.approved) {
        onClaimSubmit();
        return;
      }

      // If manual review is needed, update item status and notify
      const itemRef = doc(db, 'items', item.id);
      await updateDoc(itemRef, {
        status: 'pending_claim',
        claims: arrayUnion(claimRef.id),
        claimCount: totalClaims + 1,
        lastUpdated: serverTimestamp()
      });

      onClaimSubmit();
    } catch (error) {
      console.error('Error submitting claim:', error);
      throw error;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Claim Form</h2>
        <form onSubmit={handleClaimSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Date Lost
            </label>
            <input
              type="date"
              required
              className="w-full border rounded p-2"
              value={claimDetails.dateLost}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                dateLost: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Type
            </label>
            <input
              type="text"
              required
              className="w-full border rounded p-2"
              placeholder="e.g., Electronics, Document, Jewelry..."
              value={claimDetails.type}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                type: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Unique Identifiers
            </label>
            <textarea
              required
              className="w-full border rounded p-2"
              rows="3"
              placeholder="Describe unique features or identifiers of the item..."
              value={claimDetails.uniqueIdentifiers}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                uniqueIdentifiers: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Location Lost
            </label>
            <input
              type="text"
              required
              className="w-full border rounded p-2"
              placeholder="e.g., Kampala, Main Street..."
              value={claimDetails.locationLost}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                locationLost: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Identification Details
            </label>
            <textarea
              required
              className="w-full border rounded p-2"
              rows="3"
              placeholder="Provide details to prove ownership..."
              value={claimDetails.identificationDetails}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                identificationDetails: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Notes
            </label>
            <textarea
              className="w-full border rounded p-2"
              rows="2"
              placeholder="Any additional information..."
              value={claimDetails.additionalNotes}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                additionalNotes: e.target.value
              })}
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? 'Submitting...' : 'Submit Claim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimForm;