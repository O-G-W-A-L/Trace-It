import React from 'react';
import { MapPin, MessageCircle, Truck } from 'lucide-react';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const ClaimDetailsModal = ({ claim, item, onClose, onClaimAction }) => {
  const sendAutomaticMessage = async (action) => {
    // First, check if user exists
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', claim.userEmail));
    const userSnapshot = await getDocs(q);
    
    const approvalMessage = `Your claim for ${item.name} has been approved. 
    
Payment Details:
- Amount: UGX ${claim.deliveryFee?.toLocaleString()}
- Payment Methods:
  1. Mobile Money: 0777123456 (MTN)
  2. Bank Transfer: ACC# 1234567890 (Stanbic Bank)

Please complete the payment within 48 hours to proceed with delivery. Include your claim reference number ${claim.id} in the payment description.

Location for pickup/delivery will be communicated once payment is confirmed.`;

    const rejectionMessage = `Your claim for ${item.name} has been reviewed and could not be approved at this time.

This could be due to:
- Insufficient proof of ownership
- Inconsistent identification details
- Multiple claims for the same item

You can submit a new claim with additional documentation if you believe this decision was made in error.`;

    try {
      // Add message to Firestore
      await addDoc(collection(db, 'messages'), {
        content: action === 'approve' ? approvalMessage : rejectionMessage,
        senderEmail: 'admin@example.com',
        recipientEmail: claim.userEmail,
        sender: 'Admin',
        recipient: 'User',
        senderName: 'Admin',
        timestamp: serverTimestamp(),
      });

      // If user exists, also send a notification (you can implement this later)
      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        // Add notification logic here if needed
      }

    } catch (error) {
      console.error('Error sending automatic message:', error);
    }
  };

  const handleClaimAction = async (action, itemId, claimId) => {
    try {
      // First send the automatic message
      await sendAutomaticMessage(action);
      // Then proceed with the claim action
      await onClaimAction(action, itemId, claimId);
    } catch (error) {
      console.error('Error handling claim action:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Claim Details</h2>
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
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Claimant Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Email:</span> {claim.userEmail}</p>
                <p><span className="font-medium">Contact:</span> {claim.contactInformation}</p>
                <div className="flex items-start">
                  <MessageCircle className="w-4 h-4 mt-1 mr-2 text-gray-500" />
                  <div>
                    <p className="font-medium">Identification Details:</p>
                    <p className="text-gray-600">{claim.identificationDetails}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Delivery Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Region:</span> {claim.deliveryRegion}</p>
                <p><span className="font-medium">District:</span> {claim.deliveryDistrict}</p>
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-gray-500" />
                  <p><span className="font-medium">Delivery Fee:</span> UGX {claim.deliveryFee?.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {claim.additionalNotes && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Additional Notes</h3>
                <p className="text-gray-600">{claim.additionalNotes}</p>
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
            onClick={() => handleClaimAction('reject', item.id, claim.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reject Claim
          </button>
          <button
            onClick={() => handleClaimAction('approve', item.id, claim.id)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Approve Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimDetailsModal;