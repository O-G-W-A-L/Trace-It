import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const checkClaimEligibility = async (claimId, claimData, itemData) => {
  try {
    // Validate email format
    const isEmailValid = validateEmail(claimData.userEmail);
    
    // Check if identifiers match (substring check for flexibility)
    const doIdentifiersMatch = itemData.uniqueIdentifiers.toLowerCase().includes(
      claimData.uniqueIdentifiers.toLowerCase()
    );
    
    // Check if locations match (substring check for flexibility)
    const doLocationsMatch = itemData.location.toLowerCase().includes(
      claimData.locationLost.toLowerCase()
    ) || claimData.locationLost.toLowerCase().includes(
      itemData.location.toLowerCase()
    );
    
    // Check if date is valid (claim date should not be later than item found date)
    const isDateValid = checkDate(claimData.dateLost, itemData.dateFound);

    // Combine all conditions
    if (isEmailValid && doIdentifiersMatch && doLocationsMatch && isDateValid) {
      // Auto-approve the claim
      await updateClaimStatus(claimId, 'approved');
      
      // Update item status to 'claimed'
      await updateDoc(doc(db, 'items', itemData.id), { status: 'claimed' });
      
      // Add notification
      await addNotification(
        claimData.userId, // Use correct userId from Firebase Auth
        'Your claim has been automatically approved.',
        'Claim Approved',
        'success'
      );
      
      return {
        success: true,
        approved: true,
        message: 'Claim automatically approved.',
      };
    } else {
      // Manual review required
      await updateClaimStatus(claimId, 'pending_review');
      
      // Add notification
      await addNotification(
        claimData.userId,
        'Your claim is under review and will be processed within 24 hours.',
        'Claim Under Review',
        'info'
      );
      
      return {
        success: true,
        approved: false,
        message: 'Claim requires manual approval.',
      };
    }
  } catch (error) {
    console.error('Error during auto-approval check:', error);
    return { success: false, error: error.message };
  }
};

// Helper functions
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const checkDate = (claimDate, itemDate) => {
  const claimDateObj = new Date(claimDate);
  const itemDateObj = new Date(itemDate);
  return claimDateObj <= itemDateObj;
};

const updateClaimStatus = async (claimId, status) => {
  const claimRef = doc(db, 'claims', claimId);
  await updateDoc(claimRef, { status });
};

const addNotification = async (userId, message, title, type) => {
  try {
    await addDoc(collection(db, 'notifications'), {
      userId: userId,
      message: message,
      title: title,
      type: type,
      isRead: false,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error adding notification:', error);
  }
};