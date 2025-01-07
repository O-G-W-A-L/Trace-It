import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';
import { 
  collection, 
  addDoc, 
  serverTimestamp,
  arrayUnion,
  updateDoc,
  doc
} from 'firebase/firestore';
import { db } from '../../firebase/config';

const REGIONS_AND_DISTRICTS = {
  Northern: {districts: ['Gulu', 'Kitgum', 'Lira', 'Arua'], baseFee: 15000},
  Eastern: {districts: ['Jinja', 'Mbale', 'Soroti', 'Tororo'], baseFee: 12000},
  Southern: {districts: ['Masaka', 'Mbarara', 'Kabale', 'Rukungiri'], baseFee: 13000},
  Western: {districts: ['Fort Portal', 'Kasese', 'Hoima', 'Masindi'], baseFee: 14000},
  Central: {districts: ['Kampala', 'Wakiso', 'Mukono', 'Entebbe'], baseFee: 8000}
};

const ClaimForm = ({ item, currentUser, onClaimSubmit, onCancel, isLoading, totalClaims }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [claimDetails, setClaimDetails] = useState({
    identificationDetails: '',
    additionalNotes: '',
    dateLost: '',
    type: '',
    uniqueIdentifiers: '',
    locationLost: '',
    deliveryRegion: '',
    deliveryDistrict: '',
    deliveryFee: 0
  });

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

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedDistrict('');
  };

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const claim = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        itemId: item.id,
        status: 'pending',
        timestamp: serverTimestamp(),
        ...claimDetails
      };

      const claimRef = await addDoc(collection(db, 'claims'), claim);

      const itemRef = doc(db, 'items', item.id);
      await updateDoc(itemRef, {
        status: 'pending_claim',
        claims: arrayUnion(claimRef.id),
        claimCount: (totalClaims + 1),
        lastUpdated: serverTimestamp()
      });

      await addDoc(collection(db, 'notifications'), {
        type: 'new_claim',
        itemId: item.id,
        claimId: claimRef.id,
        userId: currentUser.uid,
        timestamp: serverTimestamp(),
        read: false,
        message: `New claim submitted for ${item.name}`,
        userEmail: currentUser.email
      });

      onClaimSubmit();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Claim Form</h2>
        <form onSubmit={handleClaimSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Date Lost
            </label>
            <input
              type="date"
              required
              className="w-full border rounded p-2"
              value={claimDetails.dateLost}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                dateLost: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Type
            </label>
            <input
              type="text"
              required
              className="w-full border rounded p-2"
              placeholder="e.g., Electronics, Document, Jewelry..."
              value={claimDetails.type}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                type: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Unique Identifiers
            </label>
            <textarea
              required
              className="w-full border rounded p-2"
              rows="3"
              placeholder="Describe unique features or identifiers of the item..."
              value={claimDetails.uniqueIdentifiers}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                uniqueIdentifiers: e.target.value
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Location Lost
            </label>
            <input
              type="text"
              required
              className="w-full border rounded p-2"
              placeholder="e.g., Kampala, Main Street..."
              value={claimDetails.locationLost}
              onChange={(e) => setClaimDetails({
                ...claimDetails,
                locationLost: e.target.value
              })}
            />
          </div>

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
              onClick={onCancel}
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
  );
};

export default ClaimForm;
