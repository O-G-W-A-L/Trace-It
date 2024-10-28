import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowLeft, Truck } from 'lucide-react';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  serverTimestamp,
  arrayUnion 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const REGIONS_AND_DISTRICTS = {
  Northern: {
    districts: ['Gulu', 'Kitgum', 'Lira', 'Arua'],
    baseFee: 15000
  },
  Eastern: {
    districts: ['Jinja', 'Mbale', 'Soroti', 'Tororo'],
    baseFee: 12000
  },
  Southern: {
    districts: ['Masaka', 'Mbarara', 'Kabale', 'Rukungiri'],
    baseFee: 13000
  },
  Western: {
    districts: ['Fort Portal', 'Kasese', 'Hoima', 'Masindi'],
    baseFee: 14000
  },
  Central: {
    districts: ['Kampala', 'Wakiso', 'Mukono', 'Entebbe'],
    baseFee: 8000
  }
};

const ItemDetail = ({ currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [claimDetails, setClaimDetails] = useState({
    identificationDetails: '',
    contactInformation: '',
    additionalNotes: '',
    deliveryRegion: '',
    deliveryDistrict: '',
    deliveryFee: 0
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error('Error:', error);
        showToast('Error loading item', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      const baseFee = REGIONS_AND_DISTRICTS[selectedRegion].baseFee;
      // Add distance-based calculation if needed
      const calculatedFee = baseFee;
      setDeliveryFee(calculatedFee);
      setClaimDetails(prev => ({
        ...prev,
        deliveryRegion: selectedRegion,
        deliveryDistrict: selectedDistrict,
        deliveryFee: calculatedFee
      }));
    }
  }, [selectedRegion, selectedDistrict]);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedDistrict('');
  };

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const claim = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: id,
        status: 'pending',
        timestamp: serverTimestamp(),
        ...claimDetails
      };

      const claimRef = await addDoc(collection(db, 'claims'), claim);

      await updateDoc(doc(db, 'items', id), {
        claims: arrayUnion(claimRef.id),
        status: 'pending_claim'
      });

      await addDoc(collection(db, 'notifications'), {
        type: 'new_claim',
        itemId: id,
        claimId: claimRef.id,
        userId: currentUser.uid,
        timestamp: serverTimestamp(),
        read: false
      });

      showToast('Claim submitted successfully', 'success');
      setShowClaimForm(false);
      
      const updatedDoc = await getDoc(doc(db, 'items', id));
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

      <div className="bg-white rounded-lg shadow p-6">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <span className={`px-2 py-1 rounded ${
            item.status === 'unclaimed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {item.status}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mt-1 mr-2" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">{item.location}</p>
            </div>
          </div>

          <div className="flex items-start">
            <MessageCircle className="w-5 h-5 mt-1 mr-2" />
            <div>
              <p className="font-medium">Details</p>
              <p className="text-gray-600">{item.details}</p>
            </div>
          </div>
        </div>

        {item.status === 'unclaimed' && (
          <button
            onClick={() => setShowClaimForm(true)}
            className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Claim This Item
          </button>
        )}

        {showClaimForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Claim Form</h2>
              <form onSubmit={handleClaimSubmit} className="space-y-4">
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
                    Contact Information
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded p-2"
                    placeholder="Phone number or alternative contact..."
                    value={claimDetails.contactInformation}
                    onChange={(e) => setClaimDetails({
                      ...claimDetails,
                      contactInformation: e.target.value
                    })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Delivery Location
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      required
                      className="border rounded p-2"
                      value={selectedRegion}
                      onChange={handleRegionChange}
                    >
                      <option value="">Select Region</option>
                      {Object.keys(REGIONS_AND_DISTRICTS).map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>

                    <select
                      required
                      className="border rounded p-2"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      disabled={!selectedRegion}
                    >
                      <option value="">Select District</option>
                      {selectedRegion && REGIONS_AND_DISTRICTS[selectedRegion].districts.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Truck className="w-4 h-4 mr-1" />
                      Delivery Fee: UGX {deliveryFee.toLocaleString()}
                    </div>
                  )}
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
                    onClick={() => setShowClaimForm(false)}
                    className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !selectedRegion || !selectedDistrict}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Claim'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;