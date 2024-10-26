// MessageManagement.jsx
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const MessageManagement = ({ messages, users, fetchData, showToast }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) {
      showToast('Please enter a message', 'error');
      return;
    }

    try {
      await addDoc(collection(db, 'messages'), {
        content: newMessage.trim(),
        recipientId: selectedUser ? selectedUser.id : 'all',
        sender: 'Admin',
        timestamp: serverTimestamp(),
        recipientName: selectedUser ? selectedUser.name : 'All Users',
        senderName: 'Admin' // Adding sender name explicitly
      });
      
      setNewMessage('');
      fetchData();
      showToast(`Message sent to ${selectedUser ? selectedUser.name : 'all users'}`, 'success');
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    return timestamp.toDate().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold">Users</h3>
          <div 
            className={`mt-2 cursor-pointer p-2 rounded ${
              !selectedUser ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
            onClick={() => setSelectedUser(null)}
          >
            <p className="font-semibold">All Users</p>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-300px)]">
          {users.map((user) => (
            <div
              key={user.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 transition duration-150 ${
                selectedUser?.id === user.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-medium text-sm">
                  {user.name?.charAt(0).toUpperCase() || '?'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{user.name || 'Unnamed User'}</p>
                <p className="text-sm text-gray-500 truncate">{user.email || 'No email'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden md:col-span-2">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold">
            {selectedUser ? `Messaging ${selectedUser.name}` : 'Messaging All Users'}
          </h3>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-400px)] p-4 space-y-4">
          {messages
            .filter(msg => !selectedUser || msg.recipientId === selectedUser.id || msg.recipientId === 'all')
            .map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'Admin' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'Admin' 
                    ? 'bg-blue-100 text-blue-900' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                      {message.sender === 'Admin' ? 'You' : message.senderName || 'User'}
                    </span>
                    {message.recipientId === 'all' && (
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">All Users</span>
                    )}
                  </div>
                  <p className="mt-1">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="p-4 border-t bg-gray-50">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={`Message ${selectedUser ? selectedUser.name : 'all users'}...`}
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageManagement;