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
  arrayUnion,
  query,
  where,
  getDocs
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
  const [userHasClaimed, setUserHasClaimed] = useState(false);
  const [totalClaims, setTotalClaims] = useState(0);
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

  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      const baseFee = REGIONS_AND_DISTRICTS[selectedRegion].baseFee;
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
      // Create the claim document
      const claim = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: id,
        status: 'pending',
        timestamp: serverTimestamp(),
        ...claimDetails
      };

      const claimRef = await addDoc(collection(db, 'claims'), claim);

      // Update the item document
      const itemRef = doc(db, 'items', id);
      await updateDoc(itemRef, {
        status: 'pending_claim', // Updated status to indicate multiple claims possible
        claims: arrayUnion(claimRef.id),
        claimCount: (totalClaims + 1),
        lastUpdated: serverTimestamp()
      });

      // Create notification
      await addDoc(collection(db, 'notifications'), {
        type: 'new_claim',
        itemId: id,
        claimId: claimRef.id,
        userId: currentUser.uid,
        timestamp: serverTimestamp(),
        read: false,
        message: `New claim submitted for ${item.name}`,
        userEmail: currentUser.email
      });

      showToast('Claim submitted successfully', 'success');
      setShowClaimForm(false);
      setUserHasClaimed(true);
      setTotalClaims(prev => prev + 1);
      
      // Fetch updated item data
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
          <div className="flex flex-col items-end">
            <span className={`px-2 py-1 rounded ${
              item.status === 'unclaimed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {item.status}
            </span>
            {totalClaims > 0 && (
              <span className="text-sm text-gray-600 mt-1">
                {totalClaims} claim{totalClaims !== 1 ? 's' : ''} submitted
              </span>
            )}
          </div>
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

        {userHasClaimed ? (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-blue-700">
            You have already submitted a claim for this item
          </div>
        ) : (
          <button
            onClick={() => setShowClaimForm(true)}
            className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Submit a Claim
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