import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  doc, 
  getDoc, 
  query,
  where,
  getDocs,
  collection
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemInfo from './ItemInfo';
import ClaimForm from './ClaimForm';

const ItemDetail = ({ currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [userHasClaimed, setUserHasClaimed] = useState(false);
  const [totalClaims, setTotalClaims] = useState(0);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchItemAndClaims = async () => {
      try {
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const itemData = { id: docSnap.id, ...docSnap.data() };
          setItem(itemData);
          
          // Check if user has already claimed this item
          const userClaimsQuery = query(
            collection(db, 'claims'),
            where('itemId', '==', id),
            where('userId', '==', currentUser.uid)
          );
          const userClaimsSnapshot = await getDocs(userClaimsQuery);
          setUserHasClaimed(!userClaimsSnapshot.empty);

          // Get total claims count
          const allClaimsQuery = query(
            collection(db, 'claims'),
            where('itemId', '==', id)
          );
          const allClaimsSnapshot = await getDocs(allClaimsQuery);
          setTotalClaims(allClaimsSnapshot.size);
        }
      } catch (error) {
        console.error('Error:', error);
        showToast('Error loading item', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItemAndClaims();
  }, [id, currentUser.uid]);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleClaimSubmit = async () => {
    try {
      showToast('Claim submitted successfully', 'success');
      setShowClaimForm(false);
      setUserHasClaimed(true);
      setTotalClaims(prev => prev + 1);
      
      // Fetch updated item data
      const itemRef = doc(db, 'items', id);
      const updatedDoc = await getDoc(itemRef);
      if (updatedDoc.exists()) {
        setItem({ id: updatedDoc.id, ...updatedDoc.data() });
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('Error submitting claim', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center p-4">
        <p>Item not found</p>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {toast && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
          toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {toast.message}
        </div>
      )}

      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <ItemInfo item={item} totalClaims={totalClaims} />

      {userHasClaimed ? (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-700">
          You have already submitted a claim for this item
        </div>
      ) : (
        <button
          onClick={()=> setShowClaimForm(true)}
          className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit a Claim
        </button>
      )}

      {showClaimForm && (
        <ClaimForm
          item={item}
          currentUser={currentUser}
          onClaimSubmit={handleClaimSubmit}
          onCancel={() => setShowClaimForm(false)}
          isLoading={isLoading}
          totalClaims={totalClaims}
        />
      )}
    </div>
  );
};

export default ItemDetail;

