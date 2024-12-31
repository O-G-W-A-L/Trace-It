import React from 'react';
import { collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const sendAutomaticMessage = async (action, userEmail, claim, item) => {
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

export const handleClaimAction = async (action, itemId, claimId, allClaims, currentClaim) => {
  try {
    await sendAutomaticMessage(action, currentClaim.userEmail, currentClaim, { id: itemId });
    
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
          await sendAutomaticMessage('reject', claimToReject.userEmail, claimToReject, { id: itemId });
        });

      await Promise.all(rejectPromises);
    }

    const claimRef = doc(db, 'claims', claimId);
    await updateDoc(claimRef, { 
      status: action === 'approve' ? 'approved' : 'rejected',
      actionDate: serverTimestamp(),
      canReclaim: action === 'reject' ? true : false // Allow reclaiming if rejected
    });

    return {
      success: true,
      updatedClaims: allClaims.map(c => {
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
      })
    };
  } catch (error) {
    console.error('Error handling claim action:', error);
    return { success: false, error };
  }
};

export const handleAdditionalActions = async (action, currentClaim, item) => {
  try {
    await sendAutomaticMessage(action, currentClaim.userEmail, currentClaim, item);
    
    const claimRef = doc(db, 'claims', currentClaim.id);
    await updateDoc(claimRef, { 
      lastAction: action,
      lastActionDate: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Error handling additional action:', error);
    return { success: false, error };
  }
};

