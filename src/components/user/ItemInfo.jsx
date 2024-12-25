import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const ItemInfo = ({ item }) => (
  <div className="bg-white rounded-lg shadow p-6">
    {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover rounded-lg mb-4" />}
    <h1 className="text-2xl font-bold">{item.name}</h1>
    <p>Status: {item.status}</p>
    <div className="flex items-start">
      <MapPin className="w-5 h-5 mr-2" /> <p>{item.location}</p>
    </div>
    <div className="flex items-start">
      <MessageCircle className="w-5 h-5 mr-2" /> <p>{item.details}</p>
    </div>
  </div>
);

export default ItemInfo;

