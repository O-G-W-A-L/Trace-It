import React, { useState } from 'react';
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { toast } from 'react-toastify';
import axios from 'axios';

const ClaimForm = ({ item, currentUser, onClaimSubmit, onCancel, isLoading, totalClaims }) => {
  const [claimDetails, setClaimDetails] = useState({
    dateLost: '',
    type: '',
    uniqueIdentifiers: '',
    locationLost: '',
    identificationDetails: '',
    additionalNotes: ''
  });

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Submit claim to Firestore
      const claimRef = await addDoc(collection(db, 'claims'), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: item.id,
        status: 'pending_review',
        timestamp: serverTimestamp(),
        ...claimDetails
      });

      // Step 2: Update the associated item document
      await updateDoc(doc(db, 'items', item.id), {
        status: 'pending_claim',
        claims: arrayUnion(claimRef.id),
        claimCount: totalClaims + 1,
        lastUpdated: serverTimestamp()
      });

      // Step 3: Trigger backend auto-approval
      try {
        const response = await axios.post('/api/claims/auto-approve', {
          claimId: claimRef.id
        });

        const { autoApproved, similarityScore, message } = response.data;

        if (autoApproved) {
          // Update claim document with auto-approved status and metadata
          await updateDoc(doc(db, 'claims', claimRef.id), {
            status: 'auto_approved',
            autoApproved: true,
            similarityScore,
            autoApprovedAt: serverTimestamp()
          });
          toast.success("✅ Claim auto-approved! You’ll receive confirmation shortly.");
        } else {
          toast.info("🔎 Claim submitted. Awaiting manual review.");
        }
      } catch (autoError) {
        console.warn("Auto-approval error:", autoError);
        toast.info("Claim submitted, but auto-approval system had an issue. Manual review pending.");
      }

      onClaimSubmit();
    } catch (error) {
      console.error('Error submitting claim:', error);
      toast.error('Failed to submit claim. Please try again.');
    }
  };

  const handleInputChange = (field, value) => {
    setClaimDetails(prev => ({ ...prev, [field]: value }));
  };

  const formFields = [
    { name: 'dateLost', type: 'date', label: 'Date Lost' },
    { name: 'type', type: 'text', label: 'Type', placeholder: 'e.g., Electronics, Document, Jewelry...' },
    { name: 'uniqueIdentifiers', type: 'textarea', label: 'Unique Identifiers', placeholder: 'Describe unique features or identifiers of the item...' },
    { name: 'locationLost', type: 'text', label: 'Location Lost', placeholder: 'e.g., Kampala, Main Street...' },
    { name: 'identificationDetails', type: 'textarea', label: 'Identification Details', placeholder: 'Provide details to prove ownership...' },
    { name: 'additionalNotes', type: 'textarea', label: 'Additional Notes', placeholder: 'Any additional information...', required: false }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Claim Form</h2>
        <form onSubmit={handleClaimSubmit} className="space-y-4">
          {formFields.map(field => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="w-full border rounded p-2"
                  rows="3"
                  placeholder={field.placeholder}
                  value={claimDetails[field.name]}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required !== false}
                />
              ) : (
                <input
                  type={field.type}
                  className="w-full border rounded p-2"
                  placeholder={field.placeholder}
                  value={claimDetails[field.name]}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required !== false}
                />
              )}
            </div>
          ))}
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
