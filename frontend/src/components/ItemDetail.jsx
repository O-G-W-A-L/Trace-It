import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Truck, MessageCircle } from 'lucide-react';
import { db } from '../firebase/config'; // Import your Firebase database
import { doc, getDoc, setDoc } from 'firebase/firestore';

const regions = [
  { id: 'northern', name: 'Northern Region' },
  { id: 'eastern', name: 'Eastern Region' },
  { id: 'southern', name: 'Southern Region' },
  { id: 'western', name: 'Western Region' },
];

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'items', id); // Adjust the collection name as per your Firestore structure
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem(docSnap.data());
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleDeliveryRequest = async () => {
    try {
      const deliveryRequestRef = doc(db, 'deliveryRequests', id); // Adjust as needed
      await setDoc(deliveryRequestRef, { region: selectedRegion });
      alert('Delivery request submitted successfully!');
    } catch (error) {
      console.error('Error requesting delivery:', error);
      alert('Error submitting delivery request');
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <MapPin className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-800">TraceIt</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Item Details</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Information about the found item.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Item Type</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.type}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.name}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Details</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.details}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Found Location</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.location}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Delivery Options</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Choose your delivery region.</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  {regions.map((region) => (
                    <div key={region.id} className="flex items-center">
                      <input
                        id={region.id}
                        name="region"
                        type="radio"
                        value={region.id}
                        checked={selectedRegion === region.id}
                        onChange={() => setSelectedRegion(region.id)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label htmlFor={region.id} className="ml-3 block text-sm font-medium text-gray-700">
                        {region.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleDeliveryRequest}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Truck className="h-5 w-5 mr-2" />
                    Request Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Admin
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
