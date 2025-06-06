import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import ClaimForm from './ClaimForm';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [item, setItem] = useState(null);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        setItem(docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Item not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Category: {item.category}</p>
            <p className="text-gray-600">Location Found: {item.locationFound}</p>
            <p className="text-gray-600">Date Found: {new Date(item.dateFound).toLocaleDateString()}</p>
            <p className="text-gray-600">Status: {item.status}</p>
          </div>
          <div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
        
        {/* Only show claim button if item is not claimed */}
        {item.status === 'unclaimed' && (
          <button
            onClick={() => setShowClaimForm(true)}
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Claim This Item
          </button>
        )}

        {showClaimForm && (
          <ClaimForm
            item={item}
            currentUser={user}
            onClaimSubmit={() => {
              setShowClaimForm(false);
              navigate('/dashboard');
            }}
            onCancel={() => setShowClaimForm(false)}
          />
        )}

        <button
          onClick={() => navigate('/dashboard')}
          className="mt-4 w-full text-indigo-600 hover:text-indigo-800"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;

