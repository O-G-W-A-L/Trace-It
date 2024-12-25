import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemInfo from './ItemInfo';
import ClaimForm from './ClaimForm';
import Toast from './Toast';

const ItemDetail = ({ currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docSnap = await getDoc(doc(db, 'items', id));
      setItem(docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null);
      setIsLoading(false);
    };
    fetchItem();
  }, [id]);

  const handleClaimSubmit = async (claimDetails) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'claims'), claimDetails);
      setToast({ message: 'Claim submitted successfully', type: 'success' });
      setShowClaimForm(false);
    } catch (error) {
      setToast({ message: 'Failed to submit claim', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loader2 className="animate-spin m-auto" size={48} />;
  if (!item) return <div className="text-center text-red-500">Item not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {toast && <Toast message={toast.message} type={toast.type} />}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-blue-600 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
      </button>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ItemInfo item={item} />
        <div className="p-6 bg-gray-50">
          <button
            onClick={() => setShowClaimForm(true)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Claim This Item
          </button>
        </div>
      </div>
      {showClaimForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <ClaimForm
              onSubmit={handleClaimSubmit}
              onCancel={() => setShowClaimForm(false)}
              currentUser={currentUser}
              itemId={id}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;