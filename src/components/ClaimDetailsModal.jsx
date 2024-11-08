import React, { useState, useEffect } from 'react';
import { MapPin, MessageCircle, Truck } from 'lucide-react';
import { collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

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

  const sendAutomaticMessage = async (action, userEmail) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userEmail));
    const userSnapshot = await getDocs(q);

    let messageContent;
    
    switch(action) {
      case 'approve':
        messageContent = `Your claim for ${item.name} has been approved. 

Payment Details:
- Amount: UGX ${claim.deliveryFee?.toLocaleString()}
- Payment Methods:
  1. Mobile Money: 0777123456 (MTN)
  2. Airtel Money: 0703291529 (AIRTEL) 
  3. Bank Transfer: ACC# 1234567890 (Stanbic Bank)

Please complete the payment within 48 hours to proceed with delivery. Include your claim reference number ${claim.id} in the payment description.

Location for pickup/delivery will be communicated once payment is confirmed.`;
        break;

      case 'reject':
        messageContent = `Your claim for ${item.name} has been reviewed and could not be approved at this time.

You can:
1. Submit additional proof or documentation
2. Update your claim details
3. Contact support for assistance

Your claim reference number is ${claim.id}. You're welcome to submit a new claim with updated information.`;
        break;

      case 'payment_reminder':
        messageContent = `Reminder: Payment pending for ${item.name}
Please complete your payment within the next 24 hours to secure your claim.`;
        break;

      case 'payment_received':
        messageContent = `Payment confirmed for ${item.name}
We'll process your delivery/pickup details shortly.`;
        break;

      case 'verification_needed':
        messageContent = `Additional verification needed for ${item.name}
Please provide the requested documentation within 48 hours.`;
        break;

      case 'delivery_scheduled':
        messageContent = `Delivery scheduled for ${item.name}
Our team will contact you with specific timing details.`;
        break;

      default:
        messageContent = `Update regarding your claim for ${item.name}:
Please check your dashboard for more details or contact support for assistance.`;
    }

    try {
      await addDoc(collection(db, 'messages'), {
        content: messageContent,
        senderEmail: 'admin@example.com',
        recipientEmail: userEmail,
        sender: 'Admin',
        recipient: 'User',
        senderName: 'Admin',
        timestamp: serverTimestamp(),
        messageType: action,
        claimId: claim.id,
        itemId: item.id
      });

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
      const currentClaim = allClaims[currentClaimIndex];
      await sendAutomaticMessage(action, currentClaim.userEmail);
      
      if (action === 'approve') {
        const itemRef = doc(db, 'items', itemId);
        await updateDoc(itemRef, { 
          status: 'claimed',
          claimedBy: currentClaim.userEmail,
          claimDate: serverTimestamp()
        });
        
        // Update other claims to rejected only when approving
        const rejectPromises = allClaims
          .filter(c => c.id !== claimId && c.status === 'pending')
          .map(async (claimToReject) => {
            const claimRef = doc(db, 'claims', claimToReject.id);
            await updateDoc(claimRef, { status: 'rejected' });
            await sendAutomaticMessage('reject', claimToReject.userEmail);
          });

        await Promise.all(rejectPromises);
      }

      const claimRef = doc(db, 'claims', claimId);
      await updateDoc(claimRef, { 
        status: action === 'approve' ? 'approved' : 'rejected',
        actionDate: serverTimestamp(),
        canReclaim: action === 'reject' ? true : false // Allow reclaiming if rejected
      });

      await onClaimAction(action, itemId, claimId);
      
      // Update local state while keeping other claims active
      const updatedClaims = allClaims.map(c => {
        if (c.id === claimId) {
          return { 
            ...c, 
            status: action === 'approve' ? 'approved' : 'rejected',
            canReclaim: action === 'reject' ? true : false
          };
        }
        if (action === 'approve') {
          return { ...c, status: 'rejected' };
        }
        return c;
      });
      setAllClaims(updatedClaims);
    } catch (error) {
      console.error('Error handling claim action:', error);
    }
  };

  const handleAdditionalActions = async (action) => {
    try {
      const currentClaim = allClaims[currentClaimIndex];
      await sendAutomaticMessage(action, currentClaim.userEmail);
      
      const claimRef = doc(db, 'claims', currentClaim.id);
      await updateDoc(claimRef, { 
        lastAction: action,
        lastActionDate: serverTimestamp()
      });
    } catch (error) {
      console.error('Error handling additional action:', error);
    }
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
                  onClick={() => handleAdditionalActions('payment_reminder')}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
                  disabled={currentClaim.status !== 'approved'}
                >
                  Send Payment Reminder
                </button>
                <button
                  onClick={() => handleAdditionalActions('payment_received')}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mb-2"
                  disabled={currentClaim.status !== 'approved'}
                >
                  Confirm Payment Received
                </button>
                <button
                  onClick={() => handleAdditionalActions('verification_needed')}
                  className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mb-2"
                  disabled={currentClaim.status !== 'pending'}
                >
                  Request Verification
                </button>
                <button
                  onClick={() => handleAdditionalActions('delivery_scheduled')}
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
            onClick={() => handleClaimAction('reject', item.id, currentClaim.id)}
            disabled={currentClaim.status !== 'pending'}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            Reject Claim
          </button>
          <button
            onClick={() => handleClaimAction('approve', item.id, currentClaim.id)}
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