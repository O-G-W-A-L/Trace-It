import React, { useState, useEffect } from 'react';
import { Truck, X } from 'lucide-react';

const REGIONS_AND_DISTRICTS = {
  Northern: { districts: ['Gulu', 'Kitgum', 'Lira', 'Arua'], baseFee: 15000 },
  Eastern: { districts: ['Jinja', 'Mbale', 'Soroti', 'Tororo'], baseFee: 12000 },
  Southern: { districts: ['Masaka', 'Mbarara', 'Kabale', 'Rukungiri'], baseFee: 13000 },
  Western: { districts: ['Fort Portal', 'Kasese', 'Hoima', 'Masindi'], baseFee: 14000 },
  Central: { districts: ['Kampala', 'Wakiso', 'Mukono', 'Entebbe'], baseFee: 8000 },
};

const ClaimForm = ({ onSubmit, onCancel, currentUser, itemId, isLoading }) => {
  const [formData, setFormData] = useState({
    identificationDetails: '',
    contactInformation: '',
    additionalNotes: '',
    deliveryRegion: '',
    deliveryDistrict: '',
    deliveryFee: 0,
  });

  useEffect(() => {
    if (formData.deliveryRegion && formData.deliveryDistrict) {
      setFormData(prev => ({
        ...prev,
        deliveryFee: REGIONS_AND_DISTRICTS[formData.deliveryRegion].baseFee,
      }));
    }
  }, [formData.deliveryRegion, formData.deliveryDistrict]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, userId: currentUser.uid, itemId });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Claim Your Item</h2>
          <button type="button" onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <input
          name="identificationDetails"
          value={formData.identificationDetails}
          onChange={handleChange}
          placeholder="Proof of ownership details"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          name="contactInformation"
          value={formData.contactInformation}
          onChange={handleChange}
          placeholder="Contact information"
          className="w-full p-2 border rounded-md"
          required
        />
        <div className="grid grid-cols-2 gap-2">
          <select
            name="deliveryRegion"
            value={formData.deliveryRegion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Region</option>
            {Object.keys(REGIONS_AND_DISTRICTS).map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <select
            name="deliveryDistrict"
            value={formData.deliveryDistrict}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
            disabled={!formData.deliveryRegion}
          >
            <option value="">Select District</option>
            {formData.deliveryRegion && REGIONS_AND_DISTRICTS[formData.deliveryRegion].districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        {formData.deliveryFee > 0 && (
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-md">
            <span className="flex items-center text-blue-700"><Truck size={20} className="mr-2" /> Delivery Fee</span>
            <span className="font-semibold text-blue-700">UGX {formData.deliveryFee.toLocaleString()}</span>
          </div>
        )}
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Additional notes (optional)"
          className="w-full p-2 border rounded-md"
        />
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading || !formData.deliveryRegion || !formData.deliveryDistrict}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Submitting...' : 'Submit Claim'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;