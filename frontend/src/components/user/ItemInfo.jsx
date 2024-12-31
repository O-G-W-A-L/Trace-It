import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const ItemInfo = ({ item, totalClaims }) => {
  return (
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
    </div>
  );
};

export default ItemInfo;

